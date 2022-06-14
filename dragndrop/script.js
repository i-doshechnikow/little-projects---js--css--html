const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
  console.log("end");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.className = "box";
  this.append(fill);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
});
