const fs = require("fs")
const sass = require("sass")
const glob = require("glob")
const path = require("path")

const dev = process.env.NODE_ENV === "dev"

module.exports = () => ({
  name: "sass",
  setup(build) {
    const outFile = "dist/assets/css/app.css"

    build.onResolve({ filter: /\.sass$/ }, (args) => {
      const sourceFullPath = path.resolve(args.resolveDir, args.path)
      const scssPath = path.dirname(sourceFullPath)
      const scssFilePaths = glob.sync(`${scssPath}/**/*.sass`)

      return {
        path: sourceFullPath,
        namespace: "sass",
        watchFiles: scssFilePaths,
      }
    })

    build.onLoad({ filter: /.*/, namespace: "sass" }, (args) => {
      try {
        const compiled = sass.renderSync({
          file: args.path,
          outFile,
          sourceMap: dev,
          outputStyle: dev ? "expanded" : "compressed",
        })

        return {
          contents: compiled.css.toString(),
          loader: "css",
          pluginData: compiled.map,
        }
      } catch (error) {
        return {
          errors: [
            {
              text: error.formatted.match(/([^\n]*\n){0,3}/)[0],
              location: {
                file: error.file,
                line: error.line,
                column: error.column,
              },
            },
          ],
        }
      }
    })
  },
})
