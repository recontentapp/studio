import { AnySchema } from 'ajv'
import { globSync } from 'glob'
import {
  generate as jsonSchemaFakerGenerate,
  option as jsonSchemaFakerSetOption,
} from 'json-schema-faker'
import { JSONSchema } from 'json-schema-to-typescript'
import mjml2html from 'mjml'
import mustache from 'mustache'
import fs from 'node:fs'
import path from 'node:path'
import { safeParseJSON, safeReadFile } from '../utils/fs'
import {
  compileSchemaToTypescriptInterface,
  getInterfaceNameFromFilePath,
} from '../utils/jsonSchema'
import { TemplateSnapshot as SharedTemplateSnapshot } from './types'
import { explore } from './explore'

interface VariablesBag {
  id: string
  variables: Record<string, string>
  error: string | null
}

interface Preview {
  id: string
  html: string
}

interface TemplateSnapshot extends SharedTemplateSnapshot {
  schema: AnySchema | null
}

export class Template {
  private workspacePath: string
  private folderPath: string
  private mjmlPath: string
  private mjmlContent: string = ''
  private title: string | null = null
  private type: 'template' | 'layout' = 'template'
  private schema: AnySchema | null = null
  private layoutPath: string | null = null
  private layoutContent: string | null = null
  private regexps: RegExp[] = []

  private errors: string[] = []
  private warnings: string[] = []

  constructor(workspacePath: string, mjmlPath: string) {
    this.workspacePath = workspacePath
    this.mjmlPath = mjmlPath
    this.folderPath = path.dirname(mjmlPath)

    this.setup()
  }

  setup() {
    const { title, type, schema, layout, regexps, errors, warnings } = explore(
      this.mjmlPath,
      this.workspacePath,
    )
    this.title = title
    this.type = type
    this.schema = schema
    this.layoutPath = layout
    this.regexps = regexps
    this.errors = errors
    this.warnings = warnings
    this.mjmlContent = safeReadFile(this.mjmlPath)
    this.layoutContent = layout ? safeReadFile(layout) : null
  }

  isFileUpdateRelevant(filePath: string): boolean {
    return this.regexps.some(regexp => regexp.test(filePath))
  }

  get mjmPath(): string {
    return this.mjmlPath
  }

  getLocaleFromFilename(filename: string): string {
    const match = filename.match(/variables\.(\w+)\.json/)
    return match ? match[1] : 'default'
  }

  getVariableBags(): VariablesBag[] {
    const pattern = `${this.folderPath}/variables{,.+([a-zA-Z-_])}.json`
    const variablesPaths = globSync(pattern)

    if (variablesPaths.length === 0) {
      return [
        {
          id: 'default',
          variables: {},
          error: null,
        },
      ]
    }

    return variablesPaths.map(variablesPath => {
      const variables = safeParseJSON(variablesPath)

      return {
        id: this.getLocaleFromFilename(path.basename(variablesPath)),
        variables: variables ?? {},
        error: variables
          ? null
          : `${path.relative(this.workspacePath, variablesPath)} is not a valid JSON file`,
      }
    })
  }

  getPreviewWithinLayout(id: string, content: string) {
    if (!this.layoutContent || !this.layoutPath) {
      return content
    }

    const defaultVariablesPath = path.join(
      path.dirname(this.layoutPath),
      'variables.json',
    )
    const idVariablesPath = path.join(
      path.dirname(this.layoutPath),
      `variables.${id}.json`,
    )

    const previewWithinLayout = mustache.render(
      this.layoutContent,
      {
        content,
        ...safeParseJSON(defaultVariablesPath),
        ...safeParseJSON(idVariablesPath),
      },
      {},
      {
        // Disable HTML escaping
        escape: val => val,
        tags: ['{{{', '}}}'],
      },
    )

    return previewWithinLayout
  }

  getPreview(
    variableBag: VariablesBag,
    schema: AnySchema | null,
  ): string | null {
    try {
      const mjmlTemplateWithVariables = mustache.render(
        this.mjmlContent,
        variableBag.variables,
        {},
        {
          // Disable HTML escaping
          escape: val => val,
          tags: ['{{{', '}}}'],
        },
      )

      jsonSchemaFakerSetOption('useExamplesValue', true)
      const fakeData = schema
        ? jsonSchemaFakerGenerate(schema as JSONSchema)
        : {}

      const mjmlTemplateWithVariablesAndSchema = mustache.render(
        mjmlTemplateWithVariables,
        fakeData,
        {},
        {
          // Disable HTML escaping
          escape: val => val,
          tags: ['{{', '}}'],
        },
      )

      return mjml2html(
        this.getPreviewWithinLayout(
          variableBag.id,
          mjmlTemplateWithVariablesAndSchema,
        ),
      ).html
    } catch (error) {
      return null
    }
  }

  async getSnapshot(): Promise<TemplateSnapshot> {
    this.setup()

    const errorMessages: string[] = [...this.errors]
    const warningMessages: string[] = [...this.warnings]

    const variableBags = this.getVariableBags()

    const previews: Preview[] = []

    variableBags.forEach(variableBag => {
      if (variableBag.error) {
        errorMessages.push(variableBag.error)
        return
      }

      const preview = this.getPreview(variableBag, this.schema)

      if (!preview) {
        errorMessages.push(`Failed to render ${variableBag.id} HTML preview`)
      }

      previews.push({
        id: variableBag.id,
        html: preview ?? '',
      })
    })

    const relativePath = path.relative(this.workspacePath, this.mjmlPath)

    let schemaInterface: string | null = null

    if (this.schema) {
      schemaInterface = await compileSchemaToTypescriptInterface(
        this.schema,
        getInterfaceNameFromFilePath(relativePath),
      )
    }

    return {
      title: this.title,
      type: this.type,
      path: relativePath,
      schema: this.schema,
      schemaInterface,
      previews,
      errorMessages,
      warningMessages,
    }
  }
}
