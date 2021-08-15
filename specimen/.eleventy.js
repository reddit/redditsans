const markdown = require("./src/utils/filters/markdown")
const env = require("./src/site/_data/project")

const flavors = require("./src/assets/js/data/variants")
const subsets = require("./src/assets/js/data/ranges")
const weights = require("./src/assets/js/data/weights")

const weight = `(${weights.map((n) => n.label).join("|")}|Italic)`

module.exports = function (config) {
  config.setPugOptions({
    pretty: env.development,
    filters: { markdown },
  })

  if (env.production) {
    config.addTransform(
      "htmlmin",
      require("./src/utils/transforms/minify-html")
    )
  }

  const passthrough = {
    "src/static/": "/",
    "../fonts/condensed/*.(woff|woff2)": "/fonts/web/condensed",
  }

  passthrough[`../fonts/RedditSans-${weight}*.(woff2|woff)`] =
    "/fonts/web/full/"

  passthrough[`../fonts/RedditSans-${weight}*.ttf`] = "/fonts/desktop/"

  // Web subsets
  subsets
    .map((n) => n.label)
    .forEach((set) => {
      const key = `../fonts/RedditSans-${set}${weight}*.(woff2|woff)`
      const val = `/fonts/web/subsets/${set}`
      passthrough[key] = val
    })

  // Web variants
  flavors
    .map((n) => n.label)
    .forEach((set) => {
      const key = `../fonts/variants/RedditSans${set}*.(woff2|woff)`
      const val = `/fonts/web/variants/${set}`
      passthrough[key] = val
    })

  // Desktop variants
  flavors
    .map((n) => n.label)
    .forEach((set) => {
      const key = `../fonts/variants/RedditSans${set}*.ttf`
      const val = `/fonts/desktop/variants/${set}`
      passthrough[key] = val
    })

  config.addPassthroughCopy(passthrough)

  config.setQuietMode(true)

  config.setBrowserSyncConfig({
    ui: false,
    ghostMode: false,
    files: ["dist/assets/css/app.css", "dist/assets/js/app.js", "../fonts/"],
  })

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
  }
}
