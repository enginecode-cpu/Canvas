import { Particle } from "./Particle.js";
import { randomColor } from "./utils.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

const colors = [
  { r: 45, g: 74, b: 227 },
  { r: 250, g: 255, b: 89 },
  { r: 255, g: 104, b: 248 },
  { r: 44, g: 209, b: 252 },
  { r: 54, g: 233, b: 84 },
];

context.globalCompositeOperation = "soft-light";

let particles = [];
function init() {
  particles = [];
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();

  addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    for (let i = 0; i < 10; i++) {
      let radius = 0;
      let x = Math.random() * (innerWidth - radius * 2);
      let y = Math.random() * (innerHeight - radius * 2);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let particle = new Particle(
        x,
        y,
        dx,
        dy,
        mouse,
        radius,
        randomColor(colors),
        context
      );
      particles.push(particle);
    }
  });
};

setInterval(() => {
  mouse.x = undefined;
  mouse.y = undefined;
}, 1000);
