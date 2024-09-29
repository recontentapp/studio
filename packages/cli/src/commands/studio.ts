import { Command } from "commander";
import path from "node:path";
import { isValidDirectoryPath } from "../utils/fs";
import { Studio } from "../studio";
import { getNextAvailablePort } from "../utils/net";

interface Flags {
  path: string;
}

const studioCommand = new Command("studio")
  .summary("Summary")
  .description("Description")
  .requiredOption("-p, --path <path>", "Path to workspace")
  .action(async ({ path: requestedPath }: Flags, command: Command) => {
    const workspacePath = path.join(process.cwd(), requestedPath);
    if (!isValidDirectoryPath(workspacePath)) {
      command.error("Invalid path provided.");
    }

    const port = await getNextAvailablePort(4242);
    const studio = new Studio(workspacePath, port);

    process.on("SIGINT", async () => {
      await studio.terminate();
    });
  });

export default studioCommand;
