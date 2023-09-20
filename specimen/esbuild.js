const esbuild = require("esbuild")
const sassPlugin = require("./src/utils/esbuild-sass.js")

const dev = process.env.NODE_ENV === "dev"

esbuild
  .build({
    entryPoints: ["src/assets/js/app.js", "src/assets/css/app.sass"],
    bundle: true,
    outdir: "dist/assets/",
    watch: dev,
    minify: !dev,
    plugins: [sassPlugin()],
    external: ["*.ttf", "*.woff", "*.woff2", "*.svg", "*.png", "*.jpg"],
    sourcemap: dev,
    metafile: dev,
  })
  .catch((e) => console.error(e.message))
