import fs from "node:fs";
import path from "node:path";
import { AnySchema } from "ajv";
import mustache from "mustache";
import { isValidFilePath, safeParseJSON } from "../utils/fs";
import { getJSONSchema } from "../utils/jsonSchema";
import { globSync } from "glob";
import mjml2html from "mjml";

interface VariablesBag {
  id: string;
  variables: Record<string, string>;
  error: string | null;
}

interface Preview {
  id: string;
  html: string | null;
}

interface TemplateSnapshot {
  path: string;
  title: string | null;
  schema: AnySchema | null;
  previews: Preview[];
  errorMessages: string[];
}

interface ConfigResult {
  title: string | null;
  schema: AnySchema | null;
  error: string | null;
}

export class Template {
  private workspacePath: string;
  private folderPath: string;
  private mjmlPath: string;

  constructor(workspacePath: string, mjmlPath: string) {
    this.workspacePath = workspacePath;
    this.mjmlPath = mjmlPath;
    this.folderPath = path.dirname(mjmlPath);
  }

  isFileUpdateRelevant(filePath: string): boolean {
    const fileFolder = path.dirname(filePath);
    return fileFolder === this.folderPath;
  }

  get mjmPath(): string {
    return this.mjmlPath;
  }

  getConfig(): ConfigResult {
    const configPath = path.join(this.folderPath, "config.json");

    const fileExists = isValidFilePath(configPath);

    const relativePath = path.relative(this.workspacePath, configPath);

    if (!fileExists) {
      return {
        title: null,
        schema: null,
        error: `${relativePath} does not exist`,
      };
    }

    const configContent = safeParseJSON(configPath);
    if (!configContent) {
      return {
        title: null,
        schema: null,
        error: `${relativePath} is not a valid JSON file`,
      };
    }

    const result = getJSONSchema(configContent.schema);

    return {
      title: configContent.title ?? null,
      schema: result,
      error:
        configContent.schema && !result
          ? `Property "schema" in ${relativePath} is not a valid JSON schema`
          : null,
    };
  }

  getLocaleFromFilename(filename: string): string {
    const match = filename.match(/variables\.(\w+)\.json/);
    return match ? match[1] : "default";
  }

  getVariableFiles(folderPath: string): string[] {
    const pattern = `${folderPath}/variables{,.+([a-zA-Z-_])}.json`;
    return globSync(pattern);
  }

  getVariableBags(): VariablesBag[] {
    const variablesPaths = this.getVariableFiles(this.folderPath);
    return variablesPaths.map((variablesPath) => {
      const variables = safeParseJSON(variablesPath);

      return {
        id: this.getLocaleFromFilename(path.basename(variablesPath)),
        variables: variables ?? {},
        error: variables
          ? null
          : `${path.relative(this.workspacePath, variablesPath)} is not a valid JSON file`,
      };
    });
  }

  getPreview(mjmlContent: string, variables?: VariablesBag['variables']) {
    try {
      return mjml2html(
        mustache.render(
          mjmlContent,
          variables,
          {},
          {
            tags: ["{{{", "}}}"],
          }
        )
      ).html
    } catch (error) {
      return null
    }
  }

  getSnapshot(): TemplateSnapshot {
    const mjmlContent = fs.readFileSync(this.mjmlPath, "utf-8");
    const variableBags = this.getVariableBags();

    const { title, schema, error } = this.getConfig();
    const previews: Preview[] = [];

    if (variableBags.length === 0) {
      previews.push({
        id: "default",
        html: this.getPreview(mjmlContent),
      });
    } else {
      variableBags.forEach(({ id, variables }) => {
        previews.push({
          id,
          html: this.getPreview(mjmlContent, variables),
        });
      });
    }

    return {
      title,
      path: path.relative(this.workspacePath, this.mjmlPath),
      schema,
      previews,
      errorMessages: error ? [error] : [],
    };
  }
}
