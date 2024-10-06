#!/usr/bin/env node
import { program } from 'commander'
import studioCommand from './commands/studio'
import compileCommand from './commands/compile'
import newCommand from './commands/new'
import json from '../package.json'

program
  .name('recontent')
  .description('A local environment to develop MJML email templates & layouts')
  .version(json.version)
  .addCommand(newCommand)
  .addCommand(studioCommand)
  .addCommand(compileCommand)

program.parse()
