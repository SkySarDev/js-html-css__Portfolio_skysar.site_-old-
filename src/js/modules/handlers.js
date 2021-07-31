import swipePage from "./swipePage";

const handlers = () => {
  const menu = document.querySelector(".menu");

  document.getElementById("burger-btn").addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menu.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.parentNode.classList.contains("menu__nav-link")) {
      swipePage(e.target.getAttribute("href").substring(1));
      menu.classList.remove("active");
    }
  });
};

export default handlers;
