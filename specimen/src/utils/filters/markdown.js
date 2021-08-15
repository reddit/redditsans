const marked = require("marked")

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

marked.setOptions({
  smartypants: true,
})

module.exports = marked
