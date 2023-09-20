// Toggle between feature sections by keyboard or mouse

const select = require("../utilities/select")

module.exports = {
  initialize: (el) => {
    const features = Array.from(el.querySelectorAll(".featureset"))

    Array.from(el.querySelectorAll("a[href*='#']")).forEach((a) => {
      a.addEventListener("focus", select(features))
      a.addEventListener("click", select(features))
    })
  },
}
