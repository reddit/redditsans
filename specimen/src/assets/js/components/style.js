const select = require("../utilities/select")

const encode = (style) => {
  return Array.from(style).reduce(
    (m, key, i) =>
      m +
      (i == 0 ? "?" : "&") +
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(style[key]),
    ""
  )
}

const decode = (params) => {
  return Object.fromEntries(
    params
      .slice(1)
      .split(/&/)
      .map((group) => group.split("=").map(decodeURIComponent))
      .filter(([key, val]) => val)
  )
}

const update = (node) => (e) => {
  select()(e)

  Object.keys(e.currentTarget.dataset).forEach((k) => {
    node.style[k] = e.currentTarget.dataset[k]
  })

  window.history.replaceState(
    {},
    document.title,
    window.location.pathname + encode(node.style)
  )
}

const click = (el) => {
  if (el) el.click()
}

module.exports = {
  initialize: (node) => {
    const style = decode(window.location.search)
    const buttons = Array.from(node.querySelectorAll("button"))

    buttons.forEach((el) => {
      el.addEventListener("click", update(node))
    })

    Object.entries(style).forEach(([key, val]) => {
      click(node.querySelector(`[data-${key}="${val}"]`))
    })
  },
}
