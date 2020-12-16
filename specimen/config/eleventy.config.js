const path = require("path")
const paths = require("./paths")
const pug = require("pug")
const marked = require("marked")
const projectVars = require("../src/11ty/_data/project")

module.exports = function (eleventyConfig) {
  eleventyConfig.setPugOptions({
    filters: { marked },
  })

  if (projectVars.production) {
    eleventyConfig.addTransform(
      "htmlmin",
      require("../build/scripts/minify-html")
    )
  }

  eleventyConfig.addPassthroughCopy({
    "src/static/": "/",
    "src/assets/images": "/assets/images",
  })

  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      input: "src/11ty/pages",
      output: "dist",
      includes: "../_includes",
      data: "../_data",
    },
  }
}
