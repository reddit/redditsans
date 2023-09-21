import posthtml from "posthtml"
import htmlnano from "htmlnano"
import isDev from "./is-dev.js"

import postcss from "postcss"
import cssnano from "cssnano"

const html = posthtml([
  htmlnano({
    minifyJs: false,
  }),
])

const css = postcss([
  cssnano({
    preset: "default",
  }),
])

export default !isDev && [
  (content, filename) => {
    if (filename.endsWith(".html")) {
      return html.process(content).then((res) => res.html)
    }

    if (filename.endsWith(".css")) {
      return css.process(content, { from: filename }).then((res) => res.css)
    }

    return content
  },
]
