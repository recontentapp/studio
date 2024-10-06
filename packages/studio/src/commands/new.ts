import { Command } from 'commander'
import path from 'node:path'
import { outputFileSync } from 'fs-extra'
import {
  layoutMjml,
  layoutConfig,
  templateMjml,
  templateConfig,
  templateContentEnglish,
  templateContentFrench,
} from '../new/content'

const newCommand = new Command('new')
  .description(
    'Create a default folder structure for email templates & layouts',
  )
  .argument('[path]', 'Path to email templates folder')
  .action(async (requestedPath: string) => {
    const workspacePath = path.join(process.cwd(), requestedPath)
    outputFileSync(
      path.join(workspacePath, 'layouts', 'default', 'template.mjml'),
      layoutMjml,
      'utf-8',
    )
    outputFileSync(
      path.join(workspacePath, 'layouts', 'default', 'config.json'),
      layoutConfig,
      'utf-8',
    )
    outputFileSync(
      path.join(
        workspacePath,
        'templates',
        'webinar-announcement',
        'template.mjml',
      ),
      templateMjml,
      'utf-8',
    )
    outputFileSync(
      path.join(
        workspacePath,
        'templates',
        'webinar-announcement',
        'config.json',
      ),
      templateConfig,
      'utf-8',
    )
    outputFileSync(
      path.join(
        workspacePath,
        'templates',
        'webinar-announcement',
        'content.en.json',
      ),
      templateContentEnglish,
      'utf-8',
    )
    outputFileSync(
      path.join(
        workspacePath,
        'templates',
        'webinar-announcement',
        'content.fr.json',
      ),
      templateContentFrench,
      'utf-8',
    )
  })

export default newCommand
