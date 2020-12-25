import { GlowParticle } from "./GlowParticle.js";
import { randomColor, randomIntFromRange } from "./utils.js";

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

const colors = [
  { r: 45, g: 74, b: 227 },
  { r: 250, g: 255, b: 89 },
  { r: 255, g: 104, b: 248 },
  { r: 44, g: 209, b: 252 },
  { r: 54, g: 233, b: 84 },
];

context.globalCompositeOperation = "saturation";

let particles;
let totalParticles = 15;
function init() {
  let curColor = 0;
  particles = [];

  for (let i = 0; i < totalParticles; i++) {
    const particle = new GlowParticle(
      randomIntFromRange(0, innerWidth),
      randomIntFromRange(0, innerHeight),
      randomIntFromRange(400, 900),
      randomColor(colors),
      context
    );

    if (++curColor >= colors.length) {
      curColor = 0;
    }

    particles.push(particle);
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerWidth);

  for (let i = 0; i < totalParticles; i++) {
    const particle = particles[i];
    particle.update();
  }
}

window.onload = () => {
  init();
  animate();
};
