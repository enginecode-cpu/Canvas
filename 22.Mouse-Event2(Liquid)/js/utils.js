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

export function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}

// 충돌할 때 발생하는 함수
export function resolveCollision(circle, otherCircle) {
  const xVelocityDiff = circle.velocity.x - otherCircle.velocity.x;
  const yVelocityDiff = circle.velocity.y - otherCircle.velocity.y;

  const xDist = otherCircle.x - circle.x;
  const yDist = otherCircle.y - circle.y;

  // 겹칠 때 충돌
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    const angle = -Math.atan2(
      otherCircle.y - circle.y,
      otherCircle.x - circle.x
    );

    const m1 = circle.mass;
    const m2 = otherCircle.mass;

    const u1 = rotate(circle.velocity, angle);
    const u2 = rotate(otherCircle.velocity, angle);

    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y,
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y,
    };

    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    circle.velocity.x = vFinal1.x;
    circle.velocity.y = vFinal1.y;

    otherCircle.velocity.x = vFinal2.x;
    otherCircle.velocity.y = vFinal2.y;
  }
}
