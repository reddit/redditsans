// Open and close dropdowns with keyboard or mouse

export default {
  initialize: (el) => {
    const cancel = (e) => el.checked && e.stopPropagation()

    const close = (e) => {
      if (!el.parentNode.contains(e.target) && el.checked) {
        el.checked = false
      }
    }

    const onkey = (e) => {
      if (e.key === "Escape") {
        el.checked = false
        if (el.parentNode.contains(e.target)) e.target.blur()
      } else if (e.target === el && e.key === "Enter") {
        el.click()
      }
    }

    el.addEventListener("focusin", cancel)
    el.addEventListener("click", cancel)

    window.addEventListener("focusin", close)
    window.addEventListener("click", close)
    window.addEventListener("keydown", onkey)
  },
}
