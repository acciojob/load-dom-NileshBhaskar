document.addEventListener("DOMContentLoaded", function() {
  let body = document.getElementsByTagName('body')[0];
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  let p = document.createElement('p');
  p.textContent = "DOM load success";

  body.appendChild(p);
});
