const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw();
    this.update();
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.stroke();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 3;
// let dy = (Math.random() - 0.5) * 3;
// let radius = 30;

let circles = [];
for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 3;
  let dy = (Math.random() - 0.5) * 3;
  let circle = new Circle(x, y, dx, dy, radius);
  circles.push(circle);
}

// const circle = new Circle(x, y, dx, dy, radius);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // circle.draw();
  // circle.update();

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.draw();
    circle.update();
  }
  requestAnimationFrame(animate);
}

animate();
