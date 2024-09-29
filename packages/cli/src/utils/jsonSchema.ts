import Ajv from 'ajv'
import { compile } from 'json-schema-to-typescript'

export const getJSONSchema = (schema: any) => {
  try {
    const ajv = new Ajv()
    ajv.addKeyword('example')
    // ajv.addKeyword('examples')
    const validate = ajv.compile(schema)

    return validate.schema
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getInterfaceNameFromFilePath = (filePath: string): string => {
  const parts = filePath.split(/[\/\\]/)

  const fileName = parts.pop()?.split('.')[0] || ''

  const pascalCaseParts = parts.concat(fileName).map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  })

  return pascalCaseParts.join('')
}

export const compileSchemaToTypescriptInterface = (
  schema: any,
  interfaceName: string,
) => {
  return compile(schema, interfaceName, { bannerComment: '' }).catch(() => null)
}
