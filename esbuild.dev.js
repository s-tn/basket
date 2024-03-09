import * as esbuild from "esbuild";
import cssModulesPlugin from "esbuild-css-modules-plugin";

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
  plugins: [cssModulesPlugin()],
  metafile: true,
});

build.watch();

console.log(await esbuild.analyzeMetafile((await build.rebuild()).metafile));

console.timeEnd("esbuild");
