const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const imgElem = new Image();
imgElem.src = "../img/1.jpg";
imgElem.addEventListener("load", () => {
  ctx.drawImage(imgElem, 50, 50, 150, 150);
});
