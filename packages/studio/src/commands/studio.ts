import { Command } from 'commander'
import path from 'node:path'
import { isValidDirectoryPath } from '../utils/fs'
import { Studio } from '../studio'
import { getNextAvailablePort } from '../utils/net'

interface Flags {
  port?: string
}

const studioCommand = new Command('studio')
  .description('Browse your email templates & layouts')
  .argument('[path]', 'Path to email templates folder')
  .option('--port <port>', 'Port to start Studio on')
  .action(async (requestedPath: string, flags: Flags, command: Command) => {
    const workspacePath = path.join(process.cwd(), requestedPath)
    if (!isValidDirectoryPath(workspacePath)) {
      command.error('Invalid path provided.')
    }

    const desiredPort = flags.port ? parseInt(flags.port) : 4242
    const port = await getNextAvailablePort(desiredPort)
    const studio = new Studio(workspacePath, port)

    process.on('SIGINT', async () => {
      await studio.terminate()
    })
  })

export default studioCommand
