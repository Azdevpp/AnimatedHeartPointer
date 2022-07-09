document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let heart = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;

  heart.style.left = x + "px"; // "px" = size in pixels
  heart.style.top = y + "px"; // "px" = size in pixels

  let size = Math.random() * 80;
  heart.style.width = 20 + size + "px"; // "px" = size in pixels
  heart.style.height = 20 + size + "px"; // "px" = size in pixels

  let transformValue = Math.random() * 360;
  heart.style.transform = "rotate(" + transformValue + "deg)";

  body.appendChild(heart);
  setTimeout(function () {
    heart.remove();
  }, 1000);
});
