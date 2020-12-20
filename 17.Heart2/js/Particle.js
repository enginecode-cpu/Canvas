import { randomIntFromRange, randomColor } from "./utils.js";

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
    this.distanceFromCenter = randomIntFromRange(10, 20);
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

    // Circular Motion
    this.x =
      this.fixedX +
      16 * Math.pow(Math.sin(this.radians), 3) * this.distanceFromCenter;
    this.y =
      this.fixedY +
      -(
        13 * Math.cos(this.radians) -
        5 * Math.cos(2 * this.radians) -
        2 * Math.cos(3 * this.radians) -
        Math.cos(4 * this.radians)
      ) *
        this.distanceFromCenter;
    this.draw(lastPoint);
  }
}
