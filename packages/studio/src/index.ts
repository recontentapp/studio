#!/usr/bin/env node
import { program } from "commander";
import studioCommand from "./commands/studio";

program
  .name("recontent")
  .description("Test")
  .version("0.1.0")
  .addCommand(studioCommand);

program.parse();
