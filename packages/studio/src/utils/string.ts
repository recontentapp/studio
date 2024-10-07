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

export const removeTrailingSlash = (path: string): string => {
  if (path.endsWith('/')) {
    return path.slice(0, -1)
  }
  return path
}
