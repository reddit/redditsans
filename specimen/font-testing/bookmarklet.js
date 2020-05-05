javascript:(function(){
  var link = document.createElement("link"),
      style = document.createElement("style");

  style.innerHTML = "* { font-family: 'unnamedsans' !important;}";

  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "https://unnamed-sans.netlify.com/assets/fonts.css");

  document.body.style.fontFamily = "unnamedsans";
  document.head.appendChild(link);
  document.head.appendChild(style);
})()

