const versions = require("./data/versions")

// Dynamic component loading from data-component attribute
Array.from(document.querySelectorAll("[data-component]")).forEach((el) =>
  el.dataset.component
    .split(/,\s*/)
    .forEach((component) => require("./components/" + component).initialize(el))
)

let state = true

const flip = () => {
  document.body.style.fontFamily = state ? `"${versions[0]}"` : ""
  state = !state
}

window.addEventListener("keydown", (e) => {
  if (e.key === "e" && e.metaKey) flip()
})
