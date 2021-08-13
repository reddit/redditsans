const marked = require("marked")
const projectVars = require("../src/11ty/_data/project")

module.exports = function (config) {
  config.setPugOptions({
    filters: { marked },
  })

  if (projectVars.production) {
    config.addTransform("htmlmin", require("../build/scripts/minify-html"))
  }

  config.addPassthroughCopy({
    "src/static/": "/",
    "src/assets/images": "/assets/images",
  })

  config.addWatchTarget("../fonts/")

  config.setQuietMode(true)

  return {
    dir: {
      input: "src/11ty/pages",
      output: "dist",
      includes: "../_includes",
      data: "../_data",
    },
  }
}
