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
import { isValidFilePath, safeParseJSON } from '../utils/fs'
import {
  compileSchemaToTypescriptInterface,
  getInterfaceNameFromFilePath,
  getJSONSchema,
} from '../utils/jsonSchema'
import { TemplateSnapshot as SharedTemplateSnapshot } from './types'

interface VariablesBag {
  id: string
  variables: Record<string, string>
  error: string | null
}

interface Preview {
  id: string
  html: string
}

interface TemplateSnapshot extends SharedTemplateSnapshot{
  schema: AnySchema | null
}

interface ConfigResult {
  title: string | null
  type: 'template' | 'layout'
  schema: AnySchema | null
  warning: string | null
  error: string | null
}

export class Template {
  private workspacePath: string
  private folderPath: string
  private mjmlPath: string

  constructor(workspacePath: string, mjmlPath: string) {
    this.workspacePath = workspacePath
    this.mjmlPath = mjmlPath
    this.folderPath = path.dirname(mjmlPath)
  }

  isFileUpdateRelevant(filePath: string): boolean {
    const fileFolder = path.dirname(filePath)
    return fileFolder === this.folderPath
  }

  get mjmPath(): string {
    return this.mjmlPath
  }

  getConfig(mjmlContent: string): ConfigResult {
    const contentContainsContentPlaceholder = this.containsContentPlaceholder(mjmlContent)
    const configPath = path.join(this.folderPath, 'config.json')
    const fileExists = isValidFilePath(configPath)
    const relativePath = path.relative(this.workspacePath, configPath)

    if (!fileExists) {
      return {
        title: null,
        type: contentContainsContentPlaceholder? 'layout' : 'template',
        schema: null,
        error: null,
        warning: `${relativePath} does not exist`,
      }
    }

    const configContent = safeParseJSON(configPath)
    if (!configContent) {
      return {
        title: null,
        type: contentContainsContentPlaceholder? 'layout' : 'template',
        schema: null,
        warning: null,
        error: `${relativePath} is not a valid JSON file`,
      }
    }

    const result = getJSONSchema(configContent.schema)

    return {
      title: configContent.title ?? null,
      type: configContent.type === 'layout' ? 'layout' : 'template',
      schema: result,
      warning: null,
      error:
        configContent.schema && !result
          ? `Property "schema" in ${relativePath} is not a valid JSON schema`
          : null,
    }
  }

  getLocaleFromFilename(filename: string): string {
    const match = filename.match(/variables\.(\w+)\.json/)
    return match ? match[1] : 'default'
  }

  getVariableFiles(folderPath: string): string[] {
    const pattern = `${folderPath}/variables{,.+([a-zA-Z-_])}.json`
    return globSync(pattern)
  }

  getVariableBags(): VariablesBag[] {
    const variablesPaths = this.getVariableFiles(this.folderPath)
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

  containsContentPlaceholder(input: string): boolean {
    const pattern = /\{\{\{\s*content\s*\}\}\}/;
    return pattern.test(input);
  }

  getPreview(
    mjmlContent: string,
    variables: VariablesBag['variables'],
    schema: AnySchema | null,
  ): string | null {
    try {
      const mjmlTemplateWithVariables = mustache.render(
        mjmlContent,
        variables,
        {},
        {
          tags: ['{{{', '}}}'],
        },
      )

      if (!schema) {
        return mjml2html(mjmlTemplateWithVariables).html
      }

      jsonSchemaFakerSetOption('useExamplesValue', true)
      const fakeData = jsonSchemaFakerGenerate(schema as JSONSchema)

      const mjmlTemplateWithVariablesAndSchema = mustache.render(
        mjmlTemplateWithVariables,
        fakeData,
        {},
        {
          tags: ['{{', '}}'],
        },
      )

      return mjml2html(mjmlTemplateWithVariablesAndSchema).html
    } catch (error) {
      return null
    }
  }

  async getSnapshot(): Promise<TemplateSnapshot> {
    const errorMessages: string[] = []
    const warningMessages: string[] = []

    const mjmlContent = fs.readFileSync(this.mjmlPath, 'utf-8')
    const variableBags = this.getVariableBags()

    const { title, schema, error, type, warning } = this.getConfig(mjmlContent)
    if (error) {
      errorMessages.push(error)
    }
    if (warning) {
      warningMessages.push(warning)
    }

    const previews: Preview[] = []

    if (variableBags.length === 0) {
      const preview = this.getPreview(mjmlContent, {}, schema)
      if (!preview) {
        errorMessages.push('Failed to render default HTML preview')
      }

      previews.push({
        id: 'default',
        html: preview ?? '',
      })
    } else {
      variableBags.forEach(({ id, variables, error }) => {
        if (error) {
          errorMessages.push(error)
          return
        }

        const preview = this.getPreview(mjmlContent, variables, schema)
        const fileName =
          id === 'default' ? 'variables.json' : `variables.${id}.json`

        if (!preview) {
          errorMessages.push(`Failed to render HTML preview for ${fileName}`)
        }

        previews.push({
          id,
          html: preview ?? '',
        })
      })
    }

    const relativePath = path.relative(this.workspacePath, this.mjmlPath)

    let schemaInterface: string | null = null

    if (schema) {
      schemaInterface = await compileSchemaToTypescriptInterface(
        schema,
        getInterfaceNameFromFilePath(relativePath),
      )
    }

    return {
      title,
      type,
      path: relativePath,
      schema,
      schemaInterface,
      previews,
      errorMessages,
      warningMessages,
    }
  }
}
