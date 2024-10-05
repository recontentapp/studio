import { TemplateCompileResult } from '../studio/Template'
import { extractInterfaceNameFromDeclaration } from '../utils/jsonSchema'
import { inlineString, toPascalCase } from '../utils/string'

export const fileOutput = (templates: TemplateCompileResult[]): string => {
  const templatesInterfaces: string[] = []
  const lines: string[] = []

  lines.push(`import { renderEmail } from '@recontentapp/email-renderer'\n`)

  for (const template of templates) {
    const typeName = toPascalCase([template.camelCaseTitle, 'Locale'].join(''))
    const stringUnion = template.variations
      .map(variation => `'${variation.id}'`)
      .join(' | ')

    lines.push(`export type ${typeName} = ${stringUnion}\n`)

    if (template.schemaInterface) {
      lines.push(template.schemaInterface)
    }

    const interfaceName = toPascalCase(
      [template.camelCaseTitle, 'Params'].join(''),
    )
    templatesInterfaces.push(interfaceName)

    lines.push(`export interface ${interfaceName} {`)
    lines.push(`  locale: ${typeName}`)
    if (template.schemaInterface) {
      lines.push(
        `  data: ${extractInterfaceNameFromDeclaration(template.schemaInterface)}`,
      )
    }
    lines.push(`}\n`)
  }

  lines.push('export const emailRenderer = {')

  templates.forEach((template, index) => {
    lines.push(
      `  ${template.camelCaseTitle}: (params: ${templatesInterfaces[index]}) => {`,
    )

    lines.push('    const mapping = {')
    template.variations.forEach(variation => {
      lines.push(
        `      '${variation.id}': \`${inlineString(variation.template)}\`,`,
      )
    })
    lines.push('    }')

    if (template.schemaInterface) {
      lines.push(
        `    return renderEmail({ template: mapping[params.locale], data: params.data })`,
      )
    } else {
      lines.push(`    return renderEmail({ template: mapping[params.locale] })`)
    }

    lines.push('  },')
  })

  lines.push('}\n')

  return lines.join('\n')
}
