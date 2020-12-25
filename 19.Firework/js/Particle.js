export class Particle {
  constructor(x, y, radius, color, velocity, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.context = context;

    this.gravity = 0.005;
    this.friction = 0.99;

    this.alpha = 1;
  }

  draw() {
    this.context.save();
    this.context.globalAlpha = this.alpha;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
    this.context.restore();
  }

  update() {
    this.draw();
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
    this.velocity.y += this.gravity;

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.alpha -= 0.005;
  }
}
