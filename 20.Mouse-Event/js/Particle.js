export class Particle {
  constructor(x, y, dx, dy, mouse, radius, color, context) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.mouse = mouse;
    this.radius = radius;
    this.color = color;
    this.context = context;

    this.mouseRadius = 60;

    this.maxRadius = 40;
    this.minRadius = 0;
  }

  draw() {
    this.context.beginPath();
    const g = this.context.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(
      0,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`
    );
    g.addColorStop(
      1,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
    );
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = g;
    this.context.fill();
    this.context.closePath();
  }

  update() {
    this.draw();

    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius * 2 > innerWidth || this.x - this.radius * 2 < 0) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.radius * 2 > innerHeight ||
      this.y - this.radius * 2 < 0
    ) {
      this.dy = -this.dy;
    }

    if (
      this.mouse.x - this.x < this.mouseRadius &&
      this.mouse.x - this.x > -this.mouseRadius &&
      this.mouse.y - this.y < this.mouseRadius &&
      this.mouse.y - this.y > -this.mouseRadius
    ) {
      if (this.radius < this.maxRadius) {
        this.radius += 3;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 0.1;
    }

    if (this.radius < 0) {
      this.radius = 0;
    }
  }
}
