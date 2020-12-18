import { Particle } from "./Particle.js";
import { Star } from "./Star.js";
import { randomIntFromRange } from "./utils.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

const colors1 = [
  "#f6e58d",
  "#e67e22",
  "#d35400",
  "#f39c12",
  "#e74c3c",
  "#ff9f43",
  "#f9ca24",
];

let particles1;
let stars;
function init() {
  particles1 = [];
  const radius1 = 3;
  for (let i = 0; i < 50; i++) {
    let particle = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      radius1,
      colors1,
      context
    );
    particles1.push(particle);
  }

  stars = [];
  const starCount = 1000;
  const angleIncrement = (Math.PI * 2) / starCount;
  for (let i = 0; i < starCount; i++) {
    let star = new Star(
      innerWidth / 2,
      innerHeight / 2,
      randomIntFromRange(0.1, 0.5),
      {
        x: Math.cos(angleIncrement * i) * Math.random(),
        y: Math.sin(angleIncrement * i) * Math.random(),
      },
      context
    );
    stars.push(star);
  }
}

function animate() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particles1.forEach((particle) => {
    particle.update();
  });

  stars.forEach((star) => {
    star.update();
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();
};
