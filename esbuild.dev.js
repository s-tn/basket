import * as esbuild from "esbuild";

// await import("./index.js");

console.time("esbuild");

const build = await esbuild.context({
  entryPoints: ["scripts/mods/index.ts"],
  bundle: true,
  outfile: "scripts/modmenu.js",
  format: "esm",
  minify: true,
  platform: "browser",
  sourcemap: true,
  target: ["es2020"],
  plugins: [],
  metafile: true,
});

build.watch();

console.log(await esbuild.analyzeMetafile((await build.rebuild()).metafile));

console.timeEnd("esbuild");
