function preventHashChange (e) {
  if (e.currentTarget.hash &&
      e.currentTarget.pathname === window.location.pathname) {
    e.preventDefault()
    document.querySelector(e.currentTarget.hash).scrollIntoView({
      behavior: "smooth"
    })
  }
}

module.exports = {
  initialize: (el) => {
    Array
      .from(el.querySelectorAll("a[href*='#']"))
      .forEach((a) => a.addEventListener("click", preventHashChange))
  }
}
