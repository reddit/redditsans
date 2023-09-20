let increment = Date.now()

module.exports = (prefix = "_") => {
  increment++

  const id = increment.toString(32).slice(-5)

  return prefix + id
}
