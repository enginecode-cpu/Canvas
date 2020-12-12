import { Circle } from "./Circle.js";
import {
  getDistance,
  randomIntFromRange,
  randomColor,
  mouse,
} from "./utils.js";

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

const colors = ["#21ffc5", "#7ecefd", "#55dd66", "#ff7f66"];

let circles;
function init() {
  circles = [];

  for (let i = 0; i < 100; i++) {
    const radius = 20;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = randomColor(colors);

    if (i !== 0) {
      for (let j = 0; j < circles.length; j++) {
        if (getDistance(x, y, circles[j].x, circles[j].y) < 2 * radius) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);

          j = -1;
        }
      }
    }
    circles.push(new Circle(x, y, radius, color, context));
  }
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle) => {
    circle.update(circles, circles.length);
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  init();
  animate();
};
