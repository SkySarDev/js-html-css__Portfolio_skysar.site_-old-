import swipePage from "./swipePage";
import sendForm from "./sendForm";
import popupShowHide from "./popupShowHide";
import showProjectPopup from "./showProjectPopup";
import { languageSwitch } from "./languageFuncs";

const handlers = () => {
  const menu = document.querySelector(".menu");
  const main = document.querySelector(".main");
  const contactForm = document.getElementById("contact-form");
  const popups = document.querySelectorAll(".popup");
  const projectsList = document.querySelector(".projects__list");

  menu.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("menu__burger-btn")) {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
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
    }

    if (target.parentNode.classList.contains("menu__nav-link")) {
      swipePage(target.getAttribute("href").substring(1));
      menu.classList.remove("active");
    }

    if (target.closest(".menu__lang")) {
      languageSwitch(target.closest(".menu__lang").getAttribute("data-lang"));
    }
  });

  main.addEventListener("click", (e) => {
    if (e.target.classList.contains("main-nav__link")) {
      swipePage(e.target.getAttribute("href").substring(1));
    }
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendForm(contactForm);
    contactForm.reset();
  });

  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      const target = e.target;

      if (
        target.classList.contains("popup__close") ||
        !target.closest(".popup__wrapper")
      ) {
        popupShowHide(target.closest(".popup"), false);
      }
    });
  });

  projectsList.addEventListener("click", (e) => {
    const project = e.target.closest(".projects__item");

    if (project) {
      showProjectPopup(project.getAttribute("data-key"));
    }
  });
};

export default handlers;
