const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let xPos = 20;

let timerId;
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(xPos, canvas.height / 2, 20, 0, Math.PI * 2);
  context.fill();
  xPos += 10;
  // 애니메이션 멈추기1
  // if (xPos >= canvas.width - 20) return;

  timerId = requestAnimationFrame(draw);

  // 애니메이션 멈추기2
  if (xPos >= canvas.width - 20) cancelAnimationFrame(timerId);
}

draw();
