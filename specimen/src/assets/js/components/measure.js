const measure = (children, widths, count) => {
  if (widths[1] !== children[1].offsetWidth) {
    widths = children.map((child) => child.offsetWidth)
  }

  if (count < 20) {
    window.setTimeout(() => measure(children, widths, count++), 1000)
  }

  children.forEach((child, i) => {
    child.nextElementSibling.innerHTML = `${widths[i]}px / ${(
      (widths[i] / widths[0]) *
      100
    ).toFixed(1)}%`
  })
}

module.exports = {
  initialize: (node) => {
    const children = Array.from(node.querySelectorAll(".measure"))

    measure(children, [], 0)
  },
}
