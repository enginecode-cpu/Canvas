const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// context.fillRect(200, 200, 100, 100);

// function clickHandler(e) {
//   const x = e.layerX;
//   const y = e.layerY;

//   if (x > 200 && x < 300 && y > 200 && x < 300) {
//     console.log("range ok!!");
//   }
// }

// canvas.addEventListener("click", clickHandler);

let oX = canvas.width / 2;
let oY = canvas.height / 2;
let step; // 애플리케이션의 상태를 저장

let tempX, tempY, tempSpeed;
let boxArray = [];
let panel;
let rafId;

function init() {
  step = 1;
  for (let i = 0; i < 10; i++) {
    tempX = Math.random() * canvas.width * 0.8;
    tempY = Math.random() * canvas.height * 0.8;
    tempSpeed = Math.random() * 4 + 1;
    boxArray.push(new Box(i, tempX, tempY, tempSpeed, context));
  }

  panel = new Panel(oX, oY);

  render();
}

const mousePos = {
  x: 0,
  y: 0,
};

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < boxArray.length; i++) {
    // boxArray[i].x += boxArray[i].speed;
    // if (boxArray[i].x > canvas.width) {
    //   boxArray[i].x = -boxArray[i].width;
    // }
    boxArray[i].draw();
  }
  switch (step) {
    case 1:
      for (let i = 0; i < boxArray.length; i++) {
        boxArray[i].x += boxArray[i].speed;
        if (boxArray[i].x > canvas.width) {
          boxArray[i].x = -boxArray[i].width;
        }
      }
      break;

    case 2:
      // panel.scale += 0.02;
      // panel.scale = panel.scale + (목표크기 - 현재크기) * 0.1
      panel.scale = panel.scale + (1 - panel.scale) * 0.1;
      // 각도 = 스케일(0-1) * 720
      panel.angle = panel.scale * 720;
      panel.draw();
      if (panel.scale >= 0.999) {
        panel.scale = 1;
        step = 3;
      }
      break;

    case 3:
      panel.draw();
      break;
  }

  rafId = requestAnimationFrame(render);
  if (step === 3) {
    panel.showContent();
    cancelAnimationFrame(rafId);
  }
}

let selectedBox; // 클릭된 박스
canvas.addEventListener("click", (e) => {
  mousePos.x = e.layerX;
  mousePos.y = e.layerY;

  let box;
  for (let i = 0; i < boxArray.length; i++) {
    box = boxArray[i];
    if (
      mousePos.x > box.x &&
      mousePos.x < box.x + box.width &&
      mousePos.y > box.y &&
      mousePos.y < box.y + box.height
    ) {
      selectedBox = box;
    }
  }

  if (step === 1 && selectedBox) {
    // console.log(selectedBox.index);
    step = 2;
  } else if (step === 3) {
    step = 1;
    panel.scale = 0;
    selectedBox = null;
    render();
  }
});

init();
