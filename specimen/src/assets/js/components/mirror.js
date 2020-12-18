const mirror = (inputs) => (e) => {
  if (document.activeElement !== e.currentTarget) return

  inputs
    .filter((el) => el !== e.currentTarget)
    .forEach((el) => (el.value = e.currentTarget.value))
}

module.exports = {
  initialize: (node) => {
    Array.from(node.querySelectorAll("input")).forEach((el, i, arr) => {
      el.addEventListener("input", mirror(arr))
    })
  },
}
