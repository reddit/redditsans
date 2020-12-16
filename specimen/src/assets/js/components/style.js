const select = require("../utilities/select")

const update = (node) => (e) => {
  select()(e)

  Object.keys(e.currentTarget.dataset).forEach((k) => {
    node.style[k] = e.currentTarget.dataset[k]
  })
}

module.exports = {
  initialize: (node) => {
    Array.from(node.querySelectorAll("button")).forEach((el) => {
      el.addEventListener("click", update(node))
    })
  },
}
