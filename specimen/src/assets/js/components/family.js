const select = require("../utilities/select")

const samples = {
  default: [
    "HYPERREACTOR",
    "ALPHABETIZERS",
    "QUINTUPLICATE",
    "METAGALAXIES",
    "KALEIDOSCOPE",
    "reconceptualized",
    "counterclockwise",
    "turbogeneration",
    "eclaircissements",
    "sculpturesquely",
  ],
  condensed: [
    "PERIPHRASTICIZED",
    "COLLYWOBBLINGS",
    "QUARTERFINALIST",
    "JACKHAMMERING",
    "KATZENJAMMERS",
    "transmogrifications",
    "somnambulistically",
    "anthropomorphize",
    "triskaidekaphobia",
    "inexpressibleness",
  ],
  mono: [
    "CATERCORNERED",
    "XYLOGRAPHICAL",
    "DRAMATIZATION",
    "BEWILDERINGLY",
    "LACKADAISICAL",
    "swashbuckling",
    "farkleberries",
    "hypnotizingly",
    "spaghettilike",
    "blatherskites",
  ],
}

const update = (node) => (e) => {
  select()(e)

  const family = e.currentTarget.dataset.fontFamily
  const sample = samples[family] || samples.default

  node.style.fontFamily = `var(--font-family${family ? "-" : ""}${family})`

  Array.from(document.querySelectorAll("#samples samp")).forEach((el, i) => {
    el.dataset.width = sample[i]
    el.firstElementChild.placeholder = sample[i]
  })

  document.querySelectorAll(".opt-italic").forEach((el) => {
    el.classList.toggle("disabled", family !== "")
  })
}

module.exports = {
  initialize: (node) => {
    const buttons = Array.from(node.querySelectorAll("button"))

    buttons.forEach((el) => {
      el.addEventListener("click", update(document.body))
    })
  },
}
