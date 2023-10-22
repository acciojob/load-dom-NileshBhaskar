document.addEventListener("DOMContentLoaded", function() {
  let body = document.getElementsByTagName('body')[0];
  // while (body.firstChild) {
  //   body.removeChild(body.firstChild);
  // }
  body.textContent = "DOM load success";
});
