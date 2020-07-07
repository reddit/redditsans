const all = Array.from(
  document.querySelectorAll("[data-component='dropdown']")
)

const focus = (el) => {
  all.filter(e => e !== el).forEach(e => e.checked = false )
  el.focus()
}

const blur = (el) => {
  if (!el.parentNode.matches(":focus-within")) {
    el.checked = false
  }
}

module.exports = {
  initialize: (el) => {
    el.addEventListener("input", () => { focus(el) })
    el.addEventListener("focus", () => { focus(el) })

    window.addEventListener("click", (e) => {
      if (!el.parentNode.contains(e.target)) blur(el)
    })

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && el.checked) {
        el.checked = false
        el.focus()
      } else {
        window.setTimeout(() => blur(el), 0)
      }
    })
  }
}
