import { marked } from "marked"
import { markedSmartypants } from "marked-smartypants"

marked.use(markedSmartypants())

marked.setOptions({
  mangle: false,
  headerIds: false,
})

export default {}
