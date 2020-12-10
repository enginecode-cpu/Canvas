const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

window.addEventListener("click", () => {
  init();
});

class Ball {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.gravity = 1;
    this.friction = 0.9;
  }

  draw() {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
    context.closePath();
  }

  update() {
    this.draw();
    if (this.y + this.radius + this.dy > innerHeight) {
      this.dy = -this.dy * this.friction;
    } else {
      this.dy += this.gravity;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

let balls;
function init() {
  balls = [];
  for (let i = 0; i < 500; i++) {
    let radius = (Math.random() + 1) * 15;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    let ball = new Ball(x, y, dx, dy, radius);
    balls.push(ball);
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.update();
  }
  // context.fillRect(mouse.x - 50, mouse.y - 50, 100, 100);
}

init();
animate();
