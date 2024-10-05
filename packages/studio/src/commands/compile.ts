import { Command } from 'commander'
import path from 'node:path'
import { isValidDirectoryPath } from '../utils/fs'
import { globSync } from 'glob'
import { Template } from '../studio/Template'
import fs from 'fs'
import { fileOutput } from '../compile'

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
    if (!isValidDirectoryPath(outputPath)) {
      command.error('Invalid output provided.')
    }

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

    fs.writeFileSync(
      path.join(outputPath, 'emailClient.ts'),
      fileOutput(compiledTemplates),
    )
  })

export default compileCommand
