import components from "./components/index.js"

// Dynamic component loading from data-component attribute
Array.from(document.querySelectorAll("[data-component]")).forEach((el) =>
  el.dataset.component.split(/,\s*/).forEach((key) => {
    components[key]
      ? components[key].initialize(el)
      : console.error("No component found for", key)
  })
)

let showPreviousVersion = true

const flip = () => {
  document.documentElement.classList.toggle(
    "show-previous-version",
    showPreviousVersion
  )
  showPreviousVersion = !showPreviousVersion
}

window.addEventListener("keydown", (e) => {
  if (e.key === "e" && e.metaKey) flip()
})
