function resizeInput (e) {
  e.target.style.width = "0"
  var sw = e.target.scrollWidth;
  var mw = e.target.parentNode.parentNode.offsetWidth;

  if (mw === window.innerWidth) {
    mw = e.target.parentNode.offsetWidth;
  }

  e.target.parentNode.style.minWidth = Math.min(sw, mw) + "px"
  e.target.style.width = "";
}

var inputs = document.querySelectorAll("samp input");

for (var i = inputs.length - 1; i >= 0; i--) {
  var el = inputs[i]
  el.addEventListener("input", resizeInput)
};
