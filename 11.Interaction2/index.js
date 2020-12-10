const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.maxRadius = 40;
    this.minRadius = radius;

    this.colorArray = ["#ffaa33", "#99ffaa", "#00ff00", "#4411aa", "#ff1100"];
    this.colors = this.colorArray[
      Math.floor(Math.random() * this.colorArray.length)
    ];
    this.draw();
    this.update();
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.colors;
    context.fill();
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

    // interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  }
}

let circles = [];
function init() {
  circles = [];
  for (let i = 0; i < 800; i++) {
    let radius = (Math.random() + 1) * 3;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    let circle = new Circle(x, y, dx, dy, radius);
    circles.push(circle);
  }
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

window.onload = () => {
  init();
  animate();
};
