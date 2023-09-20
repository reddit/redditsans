// Measure and compare the width of children e.g. Normal and Condensed

const measure = (children, widths, count) => {
  widths = children.map((child) => child.getBoundingClientRect().width)

  children.forEach((child, i) => {
    const width = widths[i].toFixed(0)
    const ratio = (widths[i] / widths[0]) * 100
    child.nextElementSibling.innerHTML = `${width}px / ${ratio.toFixed(1)}%`
  })

  if (++count < 10 && widths[0] === widths[1]) {
    window.setTimeout(() => measure(children, widths, count), count * 100)
  }
}

module.exports = {
  initialize: (node) => {
    const children = Array.from(node.querySelectorAll(".measure"))

    measure(children, [], 0)
  },
}
