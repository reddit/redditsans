import { marked } from "marked"

import markedOptions from "./markdown-options.js"

export default {
  basedir: "src/_/includes",
  filters: {
    markdown: (content = "") => marked(content, markedOptions),
  },
}
