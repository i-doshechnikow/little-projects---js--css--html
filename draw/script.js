const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const SIZE = 20;
const COLOR = "black";
let X;
let Y;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, SIZE, 0, Math.PI * 2, true);
  ctx.fillStyle = COLOR;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = COLOR;
  ctx.lineWidth = SIZE;
  ctx.stroke();
}

drawCircle(100, 200);

drawLine(70, 250, 200, 300);
