// Synchronize the application of a class name between a set of buttons
// and some associated DOM elements

const toggle = (index, className) => (e, i) =>
  e.classList.toggle(className, i === index)

const select =
  (syncList = [], className = "active") =>
  (e) => {
    e.preventDefault()

    const el = e.currentTarget
    const parent = el.parentNode
    const siblings = Array.from(parent.parentNode.children)
    const index = siblings.indexOf(parent)

    siblings.forEach(toggle(index, className))
    syncList.forEach(toggle(index, className))
  }

module.exports = select
