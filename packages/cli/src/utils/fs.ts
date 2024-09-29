import fs from "node:fs";

export const isValidFilePath = (path: string): boolean => {
  try {
    return fs.lstatSync(path).isFile();
  } catch (error) {
    return false;
  }
};

export const isValidDirectoryPath = (path: string): boolean => {
  try {
    return fs.lstatSync(path).isDirectory();
  } catch (error) {
    return false;
  }
};

export const safeParseJSON = (path: string) => {
  try {
    const content = fs.readFileSync(path, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};
