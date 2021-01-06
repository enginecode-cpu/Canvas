export default class Particle {
  constructor(x, y, radius, color, weight, mouse, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.weight = weight;
    this.mouse = mouse;
    this.context = context;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.fill();
  }

  update() {
    this.draw();

    this.radius -= 0.05;
    if (this.radius < 0) {
      this.x = this.mouse.x + Math.random() * 20 - 10;
      this.y = this.mouse.y + Math.random() * 20 - 10;
      this.radius = Math.random() * 10 + 2;
      this.weight = Math.random() * 2 - 0.5;
    }
    this.y += this.weight;
    this.weight += 0.2;
  }
}
