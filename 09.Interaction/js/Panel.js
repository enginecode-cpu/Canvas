class Panel {
  constructor(oX, oY) {
    this.x = oX;
    this.y = oY;
    this.scale = 0;
    this.angle = 0;
    this.draw();
  }

  draw() {
    context.fillStyle = "rgba(255, 0, 0, 0.8)";
    context.resetTransform();
    context.translate(this.x, this.y);
    context.scale(this.scale, this.scale);
    context.rotate((Math.PI / 180) * this.angle);
    context.translate(-this.x, -this.y);
    context.fillRect(this.x - 150, this.y - 150, 300, 300);
    context.resetTransform();
  }

  showContent() {
    context.fillStyle = "#fff";
    context.fillText(selectedBox.index, this.x, this.y);
  }
}
