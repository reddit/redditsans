function preventHashChange (e) {
  e.preventDefault();
  document.querySelector(e.target.hash).scrollIntoView({
    behavior: "smooth"
  })
}

Array
  .from(document.querySelectorAll("header a"))
  .forEach(function(el){
    el.addEventListener("click", preventHashChange)
  })
