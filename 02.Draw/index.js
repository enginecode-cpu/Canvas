const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// (x 좌표, y 좌표, 가로 길이, 세로 길이)
ctx.fillRect(50, 50, 100, 100);
ctx.fillStyle = "#ff0000";
ctx.fillRect(0, 0, 100, 100);

// 영역만큼 지운다
ctx.clearRect(80, 80, 50, 50);

// 테두리 그리기
ctx.strokeRect(150, 150, 100, 100);

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(500, 50);
ctx.stroke();
ctx.closePath();
