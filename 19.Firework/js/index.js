import { Particle } from "./Particle.js";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

let particles;
function init() {
  particles = [];
}

function animate() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    if (particle.alpha > 0) {
      particle.update();
    } else {
      particles.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();

  addEventListener("click", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const particleCount = 230;
    const angleIncrement = (Math.PI * 2) / particleCount;
    const power = 20;
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          mouse.x,
          mouse.y,
          3,
          `hsl(${Math.random() * 360}, 50%, 50%)`,
          {
            x: Math.cos(angleIncrement * i) * Math.random() * power,
            y: Math.sin(angleIncrement * i) * Math.random() * power,
          },
          context
        )
      );
    }
  });
};
