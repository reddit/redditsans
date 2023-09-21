// Toggle between feature sections by keyboard or mouse

import select from "../utilities/select.js"

export default {
  initialize: (el) => {
    const features = Array.from(el.querySelectorAll(".featureset"))

    Array.from(el.querySelectorAll("a[href*='#']")).forEach((a) => {
      a.addEventListener("focus", select(features))
      a.addEventListener("click", select(features))
    })
  },
}
