import { AnySchema } from 'ajv'
import { globSync } from 'glob'
import {
  generate as jsonSchemaFakerGenerate,
  option as jsonSchemaFakerSetOption,
} from 'json-schema-faker'
import { JSONSchema } from 'json-schema-to-typescript'
import mustache from 'mustache'
import path from 'node:path'
import { safeParseJSON, safeReadFile } from '../utils/fs'
import { compileSchemaToTypescriptInterface } from '../utils/jsonSchema'
import { TemplateSnapshot as SharedTemplateSnapshot } from './types'
import { explore } from './explore'
import { renderEmail } from '@recontentapp/email-renderer'
import { toCamelCase, toPascalCase } from '../utils/string'

interface ContentBag {
  id: string
  content: Record<string, string>
  error: string | null
}

interface Preview {
  id: string
  html: string
}

interface TemplateSnapshot extends SharedTemplateSnapshot {
  schema: AnySchema | null
}

export interface TemplateCompileResult {
  camelCaseTitle: string
  variations: {
    id: string
    template: string
  }[]
  schemaInterface: string | null
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

  isTemplate() {
    return this.type === 'template'
  }

  get mjmPath(): string {
    return this.mjmlPath
  }

  getLocaleFromFilename(filename: string): string {
    const match = filename.match(/content\.(\w+)\.json/)
    return match ? match[1] : 'default'
  }

  getContentBags(): ContentBag[] {
    const pattern = `${this.folderPath}/content{,.+([a-zA-Z-_])}.json`
    const contentFilePaths = globSync(pattern)

    if (contentFilePaths.length === 0) {
      return [
        {
          id: 'default',
          content: {},
          error: null,
        },
      ]
    }

    return contentFilePaths.map(contentPath => {
      const content = safeParseJSON(contentPath)

      return {
        id: this.getLocaleFromFilename(path.basename(contentPath)),
        content: content ?? {},
        error: content
          ? null
          : `${path.relative(this.workspacePath, contentPath)} is not a valid JSON file`,
      }
    })
  }

  getPreviewWithinLayout(id: string, content: string) {
    if (!this.layoutContent || !this.layoutPath) {
      return content
    }

    const defaultContentPath = path.join(
      path.dirname(this.layoutPath),
      'content.json',
    )
    const idContentPath = path.join(
      path.dirname(this.layoutPath),
      `content.${id}.json`,
    )

    const previewWithinLayout = mustache.render(
      this.layoutContent,
      {
        content,
        ...safeParseJSON(defaultContentPath),
        ...safeParseJSON(idContentPath),
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

  getPreview(contentBag: ContentBag, schema: AnySchema | null): string | null {
    try {
      const mjmlTemplateWithContent = mustache.render(
        this.mjmlContent,
        contentBag.content,
        {},
        {
          // Disable HTML escaping
          escape: val => val,
          tags: ['{{{', '}}}'],
        },
      )

      const finalTemplate = this.getPreviewWithinLayout(
        contentBag.id,
        mjmlTemplateWithContent,
      )

      jsonSchemaFakerSetOption('useExamplesValue', true)
      const fakeData = schema
        ? jsonSchemaFakerGenerate(schema as JSONSchema)
        : {}

      return renderEmail({
        template: finalTemplate,
        data: fakeData,
      })
    } catch (error) {
      return null
    }
  }

  getCompiledMJML(contentBag: ContentBag): string | null {
    try {
      const mjmlTemplateWithContent = mustache.render(
        this.mjmlContent,
        contentBag.content,
        {},
        {
          // Disable HTML escaping
          escape: val => val,
          tags: ['{{{', '}}}'],
        },
      )

      const finalTemplate = this.getPreviewWithinLayout(
        contentBag.id,
        mjmlTemplateWithContent,
      )

      return finalTemplate
    } catch (error) {
      return null
    }
  }

  async compile(): Promise<TemplateCompileResult> {
    const variations: { id: string; template: string }[] = []
    const contentBags = this.getContentBags()

    for (const contentBag of contentBags) {
      if (contentBag.error) {
        continue
      }

      const compiledTemplate = this.getCompiledMJML(contentBag)
      if (!compiledTemplate) {
        continue
      }

      variations.push({
        id: contentBag.id,
        template: compiledTemplate,
      })
    }

    let schemaInterface: string | null = null
    const camelCaseTitle = toCamelCase(
      this.title ?? path.relative(this.workspacePath, this.mjmlPath),
    )

    if (this.schema) {
      schemaInterface = await compileSchemaToTypescriptInterface(
        this.schema,
        toPascalCase(`${camelCaseTitle}Variables`),
      )
    }

    return {
      camelCaseTitle,
      variations,
      schemaInterface,
    }
  }

  async getSnapshot(): Promise<TemplateSnapshot> {
    this.setup()

    const errorMessages: string[] = [...this.errors]
    const warningMessages: string[] = [...this.warnings]

    const contentBags = this.getContentBags()

    const previews: Preview[] = []

    contentBags.forEach(contentBag => {
      if (contentBag.error) {
        errorMessages.push(contentBag.error)
        return
      }

      const preview = this.getPreview(contentBag, this.schema)

      if (!preview) {
        errorMessages.push(`Failed to render ${contentBag.id} HTML preview`)
      }

      previews.push({
        id: contentBag.id,
        html: preview ?? '',
      })
    })

    const relativePath = path.relative(this.workspacePath, this.mjmlPath)

    let schemaInterface: string | null = null

    if (this.schema) {
      schemaInterface = await compileSchemaToTypescriptInterface(
        this.schema,
        toCamelCase(this.title ?? relativePath),
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
