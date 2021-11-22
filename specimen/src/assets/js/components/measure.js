const measure = (children, widths, count) => {
  if (widths[1] !== children[1].offsetWidth) {
    widths = children.map((child) => child.getBoundingClientRect().width)
  }

  if (count < 20) {
    window.setTimeout(() => measure(children, widths, count++), 1000)
  }

  children.forEach((child, i) => {
    const width = widths[i].toFixed(0)
    const ratio = (widths[i] / widths[0]) * 100
    child.nextElementSibling.innerHTML = `${width}px / ${ratio.toFixed(1)}%`
  })
}

module.exports = {
  initialize: (node) => {
    const children = Array.from(node.querySelectorAll(".measure"))

    measure(children, [], 0)
  },
}
