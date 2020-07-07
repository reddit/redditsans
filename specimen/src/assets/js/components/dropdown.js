const all = Array.from(
  document.querySelectorAll("[data-component='dropdown']")
)

const focus = (el) => {
  all.filter(e => e !== el).forEach(e => e.checked = false )
  el.focus()
}

module.exports = {
  initialize: (el) => {
    let timer

    el.addEventListener("input", () => { clearTimeout(timer); focus(el) })
    el.addEventListener("focus", () => { clearTimeout(timer); focus(el) })

    el.parentNode.addEventListener("focusout",  (e) => {
      if (!e.currentTarget.matches(":focus-within")) {
        timer = setTimeout( () => { el.checked = false }, 100)
      }
    }, false)

    el.parentNode.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && el.checked) {
        el.checked = false
        el.focus()
      }
    })
  }
}
