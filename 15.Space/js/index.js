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

let stars = [];
function init() {
  const starCount = 2000;
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
  context.fillStyle = "rgba(0, 0, 0)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star, index) => {
    star.update();
    if (star.x > innerWidth || star.x < 0) {
      stars.splice(index, 1);
    }
    if (star.y > innerHeight || star.y < 0) {
      stars.splice(index, 1);
    }
    if (stars.length === 100) {
      stars = [...stars];
      init();
    }
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();
};
