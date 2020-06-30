const toggle = (index) => (e, i) => e.classList.toggle("active", i === index)

module.exports = toggle
