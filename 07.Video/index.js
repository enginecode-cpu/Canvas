const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.font = "bold 30px serif";

let canPlayState = false;

context.textAlign = "center";
context.fillText("비디오 로딩 중", 300, 200);

const videoElem = document.querySelector(".video");

const messages = [
  { time: 1, message: "ㅋㅋㅋㅋㅋ", x: 100, y: 100 },
  { time: 3, message: "풍경이 좋네요", x: 300, y: 300 },
  { time: 5, message: "어디에요?", x: 150, y: 150 },
];

const btns = document.querySelector(".color");

let imageData;
let particles = [];
let particle;
let colorValue;
let len;

function render() {
  context.drawImage(videoElem, 0, 0, 600, 400);
  imageData = context.getImageData(0, 0, 600, 400);
  len = imageData.data.length / 4;

  for (let i = 0; i < len; i++) {
    switch (colorValue) {
      case "red":
        imageData.data[i * 4 + 0] = 255;
        break;
      case "green":
        imageData.data[i * 4 + 1] = 255;
        break;
      case "blue":
        imageData.data[i * 4 + 2] = 255;
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < messages.length; i++) {
    if (videoElem.currentTime > messages[i].time) {
      context.fillText(messages[i].message, messages[i].x, messages[i].y);
    }
  }

  context.putImageData(imageData, 0, 0);
  requestAnimationFrame(render);
}

btns.addEventListener("click", (e) => {
  colorValue = e.target.className;
});
videoElem.addEventListener("canplaythrough", render);
