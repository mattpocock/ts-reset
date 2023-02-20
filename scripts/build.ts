import * as fs from "fs/promises";
import * as path from "path";

const entrypointDir = path.join(__dirname, "../", "src", "entrypoints");
const distDir = path.join(__dirname, "../", "dist");

const run = async () => {
  try {
    await fs.mkdir(distDir);
  } catch (e) {}

  const entrypoints = await fs.readdir(entrypointDir);

  for (const entrypoint of entrypoints) {
    const entrypointBase = entrypoint.replace(".d.ts", "");

    await Promise.all([
      fs.writeFile(path.join(distDir, `${entrypointBase}.js`), ""),
      fs.writeFile(path.join(distDir, `${entrypointBase}.mjs`), ""),
      fs.copyFile(
        path.join(entrypointDir, entrypoint),
        path.join(distDir, `${entrypointBase}.d.ts`),
      ),
    ]);
  }
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
