import { Command } from 'commander'
import path from 'node:path'
import { isValidDirectoryPath } from '../utils/fs'
import { globSync } from 'glob'
import { Template } from '../studio/Template'
import { fileOutput } from '../compile'
import { outputFileSync } from 'fs-extra'
import { removeTrailingSlash } from '../utils/string'

interface Flags {
  output: string
}

const compileCommand = new Command('compile')
  .description(
    'Compile artifacts from email templates & layouts (e.g. Email renderer)',
  )
  .argument('[path]', 'Path to email templates folder')
  .requiredOption('-o, --output <output>', 'Output folder')
  .action(
    async (requestedPath: string, { output }: Flags, command: Command) => {
      const workspacePath = path.join(process.cwd(), requestedPath)
      if (!isValidDirectoryPath(workspacePath)) {
        command.error('Invalid path provided.')
      }

      const outputPath = path.join(process.cwd(), output)
      const files = globSync(removeTrailingSlash(workspacePath) + '/**/*.mjml')

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
        path.join(outputPath, 'emailRenderer.ts'),
        fileOutput(compiledTemplates),
        'utf-8',
      )
    },
  )

export default compileCommand
