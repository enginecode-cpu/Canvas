export class Particle {
  constructor(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;

    this.centerX = innerWidth / 2;
    this.centerY = innerHeight / 2;

    this.maxRadius = 200;
    this.minRadius = 20;
    this.maxN = 64;
    this.minN = 24;

    this.currentRadius = this.minRadius;
    this.currentN = this.minN;

    this.maxCheck = false;
    this.maxNCheck = false;
    this.rCheck = false;
    this.gCheck = false;
    this.bCheck = false;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.strokeStyle = this.color;
    this.context.stroke();

    // 원 내부의 곡선 그리기
    for (
      let theta = 0;
      theta <= Math.PI * 2;
      theta += Math.PI / this.currentN
    ) {
      let x = this.currentRadius * Math.cos(theta);
      let y = this.currentRadius * Math.sin(theta);

      this.cx1 = this.radius * Math.cos(theta + 20);
      this.cy1 = this.radius * Math.sin(theta + 20);

      this.cx2 = this.radius * Math.cos(theta - 20);
      this.cy2 = this.radius * Math.sin(theta - 20);

      this.context.moveTo(this.centerX - this.cx1, this.centerY - this.cy1);
      this.context.quadraticCurveTo(
        this.centerX - x,
        this.centerY - y,
        this.centerX - this.cx2,
        this.centerY - this.cy2
      );
    }
    this.context.strokeStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
    this.context.stroke();
  }

  update() {
    this.draw();
    this.colorUpdate();
    this.angleUpdate();

    // if (this.currentRadius < this.maxRadius && !this.maxCheck) {
    //   this.currentRadius += 1;
    //   if (this.currentRadius === this.maxRadius) {
    //     this.maxCheck = true;
    //   }
    // }
    // if (this.maxCheck) {
    //   this.currentRadius -= 1;
    // }
    // if (this.currentRadius < this.minRadius) {
    //   this.currentRadius = this.minRadius;
    //   this.maxCheck = false;
    // }
  }

  colorUpdate() {
    if (this.color.r > 150 && !this.rCheck) {
      this.color.r -= 0.3;
      if (this.color.r === 150) this.rCheck = true;
    }
    if (this.rCheck && this.color.r <= 255) {
      this.color.r += 0.3;
      if (this.color.r > 255) this.rCheck = false;
    }

    if (this.color.g > 180 && !this.gCheck) {
      this.color.g -= 0.5;
      if (this.color.g === 180) this.gCheck = true;
    }
    if (this.gCheck && this.color.g <= 255) {
      this.color.g += 0.5;
      if (this.color.g > 255) this.gCheck = false;
    }

    if (this.color.b > 210 && !this.bCheck) {
      this.color.b -= 0.1;
      if (this.color.b === 210) this.bCheck = true;
    }
    if (this.bCheck && this.color.b <= 255) {
      this.color.b += 0.1;
      if (this.color.b > 255) this.bCheck = false;
    }
  }

  angleUpdate() {
    if (this.currentN < this.maxN && !this.maxNCheck) {
      this.currentN += 0.1;
      if (Math.floor(this.currentN) === this.maxN) this.maxNCheck = true;
    }
    if (this.maxNCheck) {
      this.currentN -= 0.1;
    }
    if (this.currentN < this.minN) {
      this.currentN = this.minN;
      this.maxNCheck = false;
    }
  }
}
