import { Particle } from "./Particle.js";

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
  "#fd79a8",
  "#e84393",
  "#ff9ff3",
  "#f368e0",
  "#f8a5c2",
  "#f78fb3",
  "#c44569",
];

let particles1;
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
}

function animate() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particles1.forEach((particle) => {
    particle.update();
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();
};
