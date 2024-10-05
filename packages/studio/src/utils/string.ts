import camelCase from 'lodash/camelCase'
import startCase from 'lodash/startCase'

export const toCamelCase = (str: string): string => camelCase(str)
export const toPascalCase = (str: string): string =>
  startCase(camelCase(str)).replace(/ /g, '')

export const inlineString = (str: string): string => {
  if (str.includes('\n')) {
    return str.replace(/\n/g, ' ')
  }
  return str
}
