// Copy the input value from one child input or textarea to other elements

const mirror = (inputs) => (e) => {
  if (document.activeElement !== e.currentTarget) return

  inputs
    .filter((el) => el !== e.currentTarget)
    .forEach((el) => (el.value = e.currentTarget.value))
}

export default {
  initialize: (node) => {
    Array.from(node.querySelectorAll("input, textarea")).forEach(
      (el, i, arr) => {
        el.addEventListener("input", mirror(arr))
      }
    )
  },
}
