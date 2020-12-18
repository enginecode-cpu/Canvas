import { randomColor, randomIntFromRange } from "./utils.js";

export class Star {
  constructor(x, y, radius, velocity, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.context = context;

    this.colorrange = [0, 60, 240];
    this.hue = randomColor(this.colorrange);
    this.sat = randomIntFromRange(50, 120);
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = `hsl(${this.hue}, ${this.sat}%, 88%)`;
    this.context.fill();
  }

  update() {
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
