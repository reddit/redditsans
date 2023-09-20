// Smooth scroll to in-page anchor links and prevent hash changes

const scrollTo = (e) => {
  const target = document.querySelector(e.currentTarget.hash)

  if (
    target &&
    e.currentTarget.hash &&
    e.currentTarget.pathname === window.location.pathname
  ) {
    e.preventDefault()
    target.scrollIntoView({
      behavior: "smooth",
    })
  }
}

module.exports = {
  initialize: (el) => {
    Array.from(el.querySelectorAll("a[href*='#']")).forEach((a) =>
      a.addEventListener("click", scrollTo)
    )
  },
}
