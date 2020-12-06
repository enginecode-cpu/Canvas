const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const control = document.querySelector(".control");
const saveBtn = document.querySelector(".save-btn");
const resultImage = document.querySelector(".result-image");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight - 100;

let drawingMode = false;
let brush = "color";
let color = "black";

const imgElem = new Image();
imgElem.src = "../img/1.jpg";

function upHandler() {
  drawingMode = false;
}

function downHandler() {
  drawingMode = true;
}

function moveHandler(e) {
  if (!drawingMode) return;

  switch (brush) {
    case "color":
      ctx.beginPath();
      ctx.arc(e.layerX, e.layerY, 10, 0, 2 * Math.PI, false);
      ctx.fill();
      break;
    case "image":
      ctx.drawImage(imgElem, e.layerX, e.layerY, 50, 50);
      break;
  }
}

function setColor(e) {
  if (e.target.classList.value === "color-btn") {
    brush = "color";
    color = e.target.getAttribute("data-color");
    ctx.fillStyle = color;
  } else if (e.target.classList.value === "image-btn") {
    brush = "image";
  }
}

function createImage() {
  const url = canvas.toDataURL("image/png");
  const imgElem = new Image();
  imgElem.src = url;
  resultImage.appendChild(imgElem);
}

canvas.addEventListener("mouseup", upHandler);
canvas.addEventListener("mousedown", downHandler);
canvas.addEventListener("mousemove", moveHandler);
control.addEventListener("click", setColor);
saveBtn.addEventListener("click", createImage);
