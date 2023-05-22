const markdown = require("./src/utils/filters/markdown")
const env = require("./src/site/_data/project")

const flavors = require("./src/assets/js/data/variants")
const subsets = require("./src/assets/js/data/ranges")
const weights = require("./src/assets/js/data/weights")

const weight = `(${weights.map((n) => n.label).join("|")}|Italic)`

const families = ["Reddit Sans", "Reddit Sans Condensed", "Reddit Mono"]

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
  }

  families.forEach((family, i) => {
    const src = `../fonts/${family}`
    const out = "/fonts/" + family.toLocaleLowerCase().replace(/\s/g, "-")
    const familyName = family.replace(/\s/g, "")

    // Full desktop fonts
    passthrough[`${src}/${familyName}-${weight}+.ttf`] = `${out}/desktop/`

    // Full webfonts
    passthrough[
      `${src}/${familyName}-${weight}+.(woff2|woff)`
    ] = `${out}/web/full/`

    // Web subsets
    subsets
      .map((n) => n.label)
      .forEach((set) => {
        const key = `${src}/${familyName}-${set}${weight}+.(woff2|woff)`
        const val = `${out}/web/subsets/${set}`
        passthrough[key] = val
      })

    if (i == 0) {
      // Web variants
      flavors
        .map((n) => n.label)
        .forEach((flavor) => {
          const key = `${src}/variants/${familyName}${flavor}*.(woff2|woff)`
          const val = `${out}/web/variants/${flavor}`
          passthrough[key] = val
        })

      // Desktop variants
      flavors
        .map((n) => n.label)
        .forEach((flavor) => {
          const key = `${src}/variants/${familyName}${flavor}*.ttf`
          const val = `${out}/desktop/variants/${flavor}`
          passthrough[key] = val
        })
    }
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
