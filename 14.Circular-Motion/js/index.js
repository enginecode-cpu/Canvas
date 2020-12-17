import { Particle } from "./Particle.js";
import { mouse } from "./utils.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

const colors = [
  "#55efc4",
  "#0abde3",
  "#00b894",
  "#00cec9",
  "#0abde3",
  "#7bed9f",
  "#1e90ff",
];
let particles = [];
function init() {
  particles = [];
  const radius = Math.random() * 4 + 1;
  for (let i = 0; i < 50; i++) {
    let particle = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      radius,
      colors,
      context
    );
    particles.push(particle);
  }
}

function animate() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();
};
