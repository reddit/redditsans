if (document.querySelector("[data-pattern]")) {
  Array.from(document.querySelectorAll("[data-pattern]")).forEach(e => {
    let { pattern, test, glue } = e.dataset
    e.innerHTML = (test || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
      .split("")
      .map(s => pattern.replace(/\$1/g, s))
      .join(glue || "&ensp;")
  })
}
