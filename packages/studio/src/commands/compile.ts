import { Command } from 'commander'
import path from 'node:path'
import { isValidDirectoryPath } from '../utils/fs'
import { globSync } from 'glob'
import { Template } from '../studio/Template'
import { fileOutput } from '../compile'
import { outputFileSync } from 'fs-extra'

interface Flags {
  path: string
  output: string
}

const compileCommand = new Command('compile')
  .summary('Summary')
  .description('Description')
  .requiredOption('-p, --path <path>', 'Path to workspace')
  .requiredOption('-o, --output <output>', 'Path to output')
  .action(async ({ path: requestedPath, output }: Flags, command: Command) => {
    const workspacePath = path.join(process.cwd(), requestedPath)
    if (!isValidDirectoryPath(workspacePath)) {
      command.error('Invalid path provided.')
    }

    const outputPath = path.join(process.cwd(), output)

    const files = globSync(path.dirname(workspacePath) + '/**/*.mjml')
    const templates = files
      .map(filePath => new Template(workspacePath, filePath))
      .filter(template => template.isTemplate())

    const compiledTemplates = await Promise.all(
      templates.map(template => template.compile()),
    )

    if (compiledTemplates.length === 0) {
      command.error('No templates found.')
    }

    outputFileSync(
      path.join(outputPath, 'emailClient.ts'),
      fileOutput(compiledTemplates),
      'utf-8',
    )
  })

export default compileCommand
