const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// context.fillRect(100, 100, 50, 50);

// context.fillStyle = "orange";
// context.fillRect(125, 125, 50, 50);

// // canvas의 모든 상태를 저장한다
// context.save();

// context.fillStyle = "blue";
// context.beginPath();
// context.arc(300, 300, 50, 0, Math.PI * 2, false);
// context.fill();

// // 저장된 시점으로 복원한다.
// context.restore();

// context.beginPath();
// context.arc(300, 300, 20, 0, Math.PI * 2, false);
// context.fill();

let scaleValue = 1;
let rotateValue = 0;

function draw() {
  context.save();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.translate(350, 350);
  context.scale(scaleValue, scaleValue);
  context.rotate((Math.PI / 180) * rotateValue);
  context.strokeRect(-50, -50, 100, 100);
  context.restore();

  scaleValue += 0.1;
  rotateValue += 1;
  requestAnimationFrame(draw);
}

draw();
