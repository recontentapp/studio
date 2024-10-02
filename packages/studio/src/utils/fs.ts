import fs from 'node:fs'

export const isValidFilePath = (path: string): boolean => {
  try {
    return fs.lstatSync(path).isFile()
  } catch (error) {
    return false
  }
}

export const isValidDirectoryPath = (path: string): boolean => {
  try {
    return fs.lstatSync(path).isDirectory()
  } catch (error) {
    return false
  }
}

export const safeReadFile = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch (error) {
    return ''
  }
}

export const safeParseJSON = (path: string): Record<string, any> | null => {
  try {
    const content = fs.readFileSync(path, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    return null
  }
}
