const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const SIZE = 5;
const COLOR = "black";
let x;
let y;

let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
  }

  x = x2;
  y = y2;
});

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
  ctx.lineWidth = SIZE * 2;
  ctx.stroke();
}

drawCircle(100, 200);

drawLine(70, 250, 200, 300);
