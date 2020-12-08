class Box {
  constructor(index, x, y, speed) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.speed = speed;
    this.width = 100;
    this.height = 100;
    this.draw(context);
  }

  draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(this.x, this.y, 100, 100);
    context.fillStyle = "white";
    context.font = "30px sans-serif";
    context.fillText(this.index, this.x + 30, this.y + 30);
  }
}
