import { defineConfig } from "tsup";
import * as fs from "fs";
import * as path from "path";

const entry: Record<string, string> = {};

const entrypointsPath = path.join(__dirname, "src/entrypoints");

for (const entrypoint of fs.readdirSync(entrypointsPath)) {
  const entrypointPath = path.relative(
    __dirname,
    path.join(entrypointsPath, entrypoint),
  );
  const entrypointName = path.basename(entrypointPath, ".ts");
  entry[entrypointName] = entrypointPath;
}

export default defineConfig({
  entry,
  dts: true,
  format: ["esm", "cjs"],
});
