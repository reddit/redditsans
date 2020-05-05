function preventHashChange (e) {
  if (e.target.hash) {
    e.preventDefault();
    document.querySelector(e.target.hash).scrollIntoView({
      behavior: "smooth"
    })
  }
}

Array
  .from(document.querySelectorAll("header a"))
  .forEach(function(el){
    el.addEventListener("click", preventHashChange)
  })
