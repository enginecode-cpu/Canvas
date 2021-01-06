import Particle from "./Particle.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: undefined,
  y: undefined,
};

addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const particles = [];
const numberOfParticle = 800;
function createParticle() {
  for (let i = 0; i < numberOfParticle; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 5 + 2;
    let color = "#36E954";
    let weight = 1;

    particles.push(new Particle(x, y, radius, color, weight, mouse, context));
  }
}
createParticle();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => particle.update());
}

animate();

addEventListener("mouseout", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});
