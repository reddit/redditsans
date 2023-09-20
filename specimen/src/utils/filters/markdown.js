const { marked } = require("marked")
const { markedSmartypants } = require("marked-smartypants")

const joinAttrs = (attrs) => (attrs.length ? " " + attrs.join(" ") : "")

const renderer = {
  link(href, title, text) {
    const attrs = []

    if (href.match("http") && !/(s-ings.com|localhost)/.test(href)) {
      attrs.push('rel="noreferrer" target="_blank"')
    }

    return `<a href="${href}"${joinAttrs(attrs)}>${text}</a>`
  },
}

marked.use({ renderer })
marked.use(markedSmartypants())

marked.setOptions({
  mangle: false,
  headerIds: false,
})

module.exports = marked
