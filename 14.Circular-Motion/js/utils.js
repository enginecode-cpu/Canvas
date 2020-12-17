// 원 사이의 거리를 구하는 함수
export function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

// 랜덤하게 위치를 지정하는 함수
export function randomIntFromRange(min, max) {
  // max: 4, min: 3
  // Math.random(): 0 ~ 1 사이의 수를 반환
  // Math.random() * (max - min + 1): 0 ~ 2
  // Math.floor(Math.random() * (max - min + 1) + min): 3 ~ 5
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 색상 배열에서 랜덤하게 색상을 골라주는 함수
export function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const mouse = {
  x: undefined,
  y: undefined,
};
