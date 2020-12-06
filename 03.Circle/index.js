function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.arc(300, 200, 50, 0, toRadian(360));
context.stroke();

context.beginPath();
context.arc(500, 100, 20, 0, toRadian(360));
context.stroke();
