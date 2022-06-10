const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

toggle.addEventListener("click", (event) => {
  html.classList.toggle("dark");
  event.target.innerHTML = `${
    html.classList.contains("dark") ? "Light" : "Dark"
  } mode`;
});
