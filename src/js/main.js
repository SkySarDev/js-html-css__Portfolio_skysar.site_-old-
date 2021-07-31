import "../scss/main.scss";
if (process.env.NODE_ENV === "development") import("../index.html");

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";

const burgerBtn = document.getElementById("burger-btn");
const mainBlocks = document.querySelector(".main__blocks");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
});

document.querySelector(".menu__nav-list").addEventListener("click", (e) => {
  mainBlocks.style.transform = `translateX(-${e.target.dataset.swipe}%)`;
});
