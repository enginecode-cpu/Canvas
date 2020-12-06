const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");

const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");

ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx2.arc(100, 100, 20, 0, Math.PI * 2);

ctx.fill();
ctx2.fill();
