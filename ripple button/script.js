const rippleButton = document.querySelectorAll(".ripple");

rippleButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.className = "circle";
    circle.style = `top: ${yInside}px; left: ${xInside}px`;

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
