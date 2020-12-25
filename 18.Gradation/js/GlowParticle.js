export class GlowParticle {
  constructor(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;

    this.velocityX = Math.random() * 4;
    this.velocityY = Math.random() * 4;

    this.sinValue = Math.random();
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
    this.context.fillStyle = g
    this.context.fill();
  }

  update() {
    this.draw();
    this.sinValue += 0.01;

    this.radius += Math.sin(this.sinValue);

    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x < 0) {
      this.velocityX = -this.velocityX;
      this.x += 10;
    } else if (this.x > innerWidth) {
      this.velocityX = -this.velocityX;
      this.x -= 10;
    }
    if (this.y < 0) {
      this.velocityY = -this.velocityY;
      this.y += 10;
    } else if (this.y > innerHeight) {
      this.velocityY = -this.velocityY;
      this.y -= 10;
    }
  }
}
