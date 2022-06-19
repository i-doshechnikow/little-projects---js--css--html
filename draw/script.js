const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeBlock = document.querySelector("#size");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const colorPalette = document.querySelector("#color");
const btnClear = document.querySelector(".clear");

let size = 5;
let color = "#000000";
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
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseleave", (e) => {
  isPressed = false;
});

increaseBtn.addEventListener("click", (e) => {
  if (size < 100) {
    size += 1;
    sizeBlock.innerText = size;
  }
});

decreaseBtn.addEventListener("click", (e) => {
  if (size > 1) {
    size -= 1;
    sizeBlock.innerText = size;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

colorPalette.addEventListener("change", ({ target }) => (color = target.value));

btnClear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
