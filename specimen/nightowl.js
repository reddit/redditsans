import isDev from "./config/is-dev.js"
import transform from "./config/transform.js"
import copyFonts from "./config/copy-fonts.js"
import pugOptions from "./config/pug-options.js"
import markdownOptions from "./config/markdown-options.js"

/**
 * You can import the Config type from the defaults if needed
 * @type {import('night-owl/lib/config/defaults').Config}
 */
const config = {
  data: "src/_/data/index.js",

  copy: [
    {
      src: "src/_/static",
      dist: "dist",
    },

    ...copyFonts,
  ],

  transform,

  clear: true,

  excludeHidden: !isDev,

  compilers: {
    pug: { options: pugOptions },
    markdown: { options: markdownOptions },
  },
}

export default config
