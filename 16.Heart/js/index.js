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
  context.fillStyle = "rgba(0, 0, 0, 0.8)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
  });
  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();

  addEventListener("click", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const particleCount = 900;
    const angleIncrement = (Math.PI * 2) / particleCount;
    const power = 25;
    for (let i = 0; i < particleCount; i += 1) {
      particles.push(
        new Particle(
          mouse.x,
          mouse.y,
          3,
          "red",
          {
            x: 16 * Math.pow(Math.sin(angleIncrement * i), 3),
            y: -(
              13 * Math.cos(angleIncrement * i) -
              5 * Math.cos(2 * angleIncrement * i) -
              2 * Math.cos(3 * angleIncrement * i) -
              Math.cos(4 * angleIncrement * i)
            ),
          },
          context
        )
      );
    }
  });
};
