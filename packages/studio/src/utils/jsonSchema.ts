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

export const compileSchemaToTypescriptInterface = (
  schema: any,
  interfaceName: string,
) => {
  return compile(schema, interfaceName, {
    bannerComment: '',
    style: { semi: false },
  }).catch(() => null)
}

export const extractInterfaceNameFromDeclaration = (declaration: string) => {
  const match = declaration.match(/export interface (\w+)/)
  return match ? match[1] : null
}
