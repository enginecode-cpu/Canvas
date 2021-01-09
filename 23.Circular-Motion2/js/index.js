import { Particle } from "./Particle.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

const color = { r: 255, g: 255, b: 255 };

let particle;
function init() {
  particle = new Particle(innerWidth / 2, innerHeight / 2, 250, color, context);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particle.update();
}

window.onload = () => {
  init();
  animate();
};
