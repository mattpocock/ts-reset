import * as fs from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";

export const readdirRecursive = async (dir: string): Promise<string[]> => {
  const files: string[] = [];

  const entries = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = await readdirRecursive(path.join(dir, entry.name));
      files.push(...subDir);
    } else {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
};

readdirRecursive.sync = (dir: string): string[] => {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = readdirRecursive.sync(path.join(dir, entry.name));
      files.push(...subDir);
    } else {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
};
