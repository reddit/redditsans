var els = document.querySelectorAll("[data-replace][data-sample-text]");

for (var i = els.length - 1; i >= 0; i--) {
  var el = els[i]
  el.innerText = el.dataset.sampleText.trim().replace(/\n/g, " ");
  el.removeAttribute("data-sample-text");
  el.removeAttribute("data-replace");
};
