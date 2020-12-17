import { randomIntFromRange, randomColor, mouse } from "./utils.js";

export class Particle {
  constructor(x, y, radius, colors, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colors = colors;
    this.context = context;

    this.color = randomColor(this.colors);
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.fixedX = x;
    this.fixedY = y;
    this.lastMouse = { x: this.fixedX, y: this.fixedY };
    this.distanceFromCenter = randomIntFromRange(50, 120);
  }

  draw(lastPoint) {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.radius;
    this.context.moveTo(lastPoint.x, lastPoint.y);
    this.context.lineTo(this.x, this.y);
    this.context.stroke();
    this.context.fill();
  }

  update() {
    const lastPoint = { x: this.x, y: this.y };
    this.radians += this.velocity;

    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // Circular Motion
    this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw(lastPoint);
  }
}
