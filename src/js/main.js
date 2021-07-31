if (process.env.NODE_ENV === "development") import("../index.html");
import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";

const burgerBtn = document.getElementById("burger-btn");
const mainBlocks = document.querySelector(".main__blocks");
const main = document.querySelector(".main");
const menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("menu__nav-link")) {
    mainBlocks.style.transform = `translateX(-${e.target.dataset.swipe}%)`;
    main.scrollTo(0, 0);
    menu.classList.remove("active");
  }
});
