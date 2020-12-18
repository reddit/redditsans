// Dynamic component loading from data-component attribute
Array.from(document.querySelectorAll("[data-component]")).forEach((el) =>
  el.dataset.component
    .split(/,\s*/)
    .forEach((component) => require("./components/" + component).initialize(el))
)

let state = true
window.addEventListener("keydown", (e) => {
  if (e.key === "e" && e.metaKey) {
    document.body.style.fontFamily = state ? '"1.003"' : ""
    state = !state
  }
})
