import swipePage from "./swipePage";
import sendForm from "./sendForm";

const handlers = () => {
  const menu = document.querySelector(".menu");
  const main = document.querySelector(".main");
  const contactForm = document.getElementById("contact-form");

  menu.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("menu__burger-btn")) {
      menu.classList.add("active");

      setTimeout(() => {
        document.body.addEventListener(
          "click",
          (e) => {
            const target = e.target;

            if (target.classList.contains("menu-mobile__link")) {
              swipePage(target.getAttribute("href").substring(1));
            }

            menu.classList.remove("active");
          },
          { once: true }
        );
      }, 0);
    }

    if (target.parentNode.classList.contains("menu__nav-link")) {
      swipePage(target.getAttribute("href").substring(1));
      menu.classList.remove("active");
    }
  });

  main.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("main-nav__link")) {
      swipePage(target.getAttribute("href").substring(1));
    }
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    sendForm(contactForm);

    contactForm.reset();
  });
};

export default handlers;
