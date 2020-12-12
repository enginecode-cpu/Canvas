import { getDistance, resolveCollision, mouse } from "./utils.js";

export class Circle {
  constructor(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };

    this.radius = radius;
    this.color = color;
    this.opacity = 0;
    this.context = context;

    this.mass = 1;

    this.draw();
    this.update();
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.save();
    this.context.globalAlpha = this.opacity;
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.restore();
    this.context.strokeStyle = this.color;
    this.context.stroke();
    this.context.closePath();
  }

  update(circles, size) {
    this.draw();
    this.circleArray = circles;

    for (let i = 0; i < size; i++) {
      if (this === this.circleArray[i]) continue;
      if (
        getDistance(
          this.x,
          this.y,
          this.circleArray[i].x,
          this.circleArray[i].y
        ) <
        2 * this.radius
      ) {
        resolveCollision(this, this.circleArray[i]);
      }
    }

    if (this.x <= this.radius || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y <= this.radius || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
    }

    // 마우스랑 충돌했을 때
    if (
      getDistance(mouse.x, mouse.y, this.x, this.y) < 30 &&
      this.opacity < 0.5
    ) {
      this.opacity += 0.1;
    } else if (this.opacity > 0) {
      this.opacity -= 0.1;

      this.opacity = Math.max(0, this.opacity);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
