#!/usr/bin/env node
import { program } from 'commander'
import studioCommand from './commands/studio'
import compileCommand from './commands/compile'

program
  .name('recontent')
  .description('Test')
  .version('0.1.0')
  .addCommand(studioCommand)
  .addCommand(compileCommand)

program.parse()
