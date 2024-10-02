import path from 'path'
import { isValidFilePath, safeParseJSON } from '../utils/fs'
import { getJSONSchema } from '../utils/jsonSchema'
import { AnySchema } from 'ajv'

export const explore = (sourcePath: string, workspacePath: string) => {
  const errors: string[] = []
  const warnings: string[] = []
  let title: string | null = null
  let type: 'template' | 'layout' = 'template'
  let schema: AnySchema | null = null
  let layout: string | null = null
  const regexps: RegExp[] = [new RegExp(`^${sourcePath}$`)]

  const folderPath = path.dirname(sourcePath)
  regexps.push(new RegExp(`^${folderPath}/content(\\.[a-z_-]+)?\\.json$`))

  const configPath = path.join(folderPath, 'config.json')
  const relativeConfigPath = path.relative(workspacePath, configPath)
  regexps.push(new RegExp(`^${configPath}$`))

  const fileExists = isValidFilePath(configPath)
  if (!fileExists) {
    errors.push(`${relativeConfigPath} does not exist`)
  }

  const configContent = safeParseJSON(configPath)
  if (!configContent && fileExists) {
    errors.push(`${relativeConfigPath} is not a valid JSON file`)
  }

  if (configContent?.schema) {
    const jsonSchema = getJSONSchema(configContent?.schema)
    schema = jsonSchema

    if (!jsonSchema) {
      errors.push(
        `Property "schema" in ${relativeConfigPath} is not a valid JSON schema`,
      )
    }
  }

  if (configContent?.layout) {
    const layoutPath = path.join(folderPath, configContent?.layout)
    const layoutFolderPath = path.dirname(layoutPath)

    const fileExists = isValidFilePath(layoutPath)
    if (!fileExists) {
      errors.push(
        `${path.relative(workspacePath, layoutPath)} layout does not exist`,
      )
    } else {
      layout = layoutPath
      regexps.push(new RegExp(`^${layoutPath}$`))
      regexps.push(
        new RegExp(`^${layoutFolderPath}/content(\\.[a-z_-]+)?\\.json$`),
      )
    }
  }

  title = configContent?.title ?? null
  type = configContent?.type === 'layout' ? 'layout' : 'template'

  return {
    title,
    type,
    schema,
    layout,
    errors,
    warnings,
    regexps,
  }
}
