const versions = require("./data/versions")
const components = require("./components/index.js")

// Dynamic component loading from data-component attribute
Array.from(document.querySelectorAll("[data-component]")).forEach((el) =>
  el.dataset.component.split(/,\s*/).forEach((key) => {
    components[key]
      ? components[key].initialize(el)
      : console.error("No component found for", key)
  })
)

let state = true

const flip = () => {
  document.body.style.fontFamily = state ? `"${versions[0]}"` : ""
  state = !state
}

window.addEventListener("keydown", (e) => {
  if (e.key === "e" && e.metaKey) flip()
})
