import getData from "./getData";
import showNotification from "./showNotification";
import { getCurrentLang } from "./languageFuncs";

const renderProjects = () => {
  const projectsList = document.querySelector(".projects__list");
  const currentLang = getCurrentLang();

  projectsList.textContent = "";

  const render = (data) => {
    const moreInfo = {
      en: "More info",
      ru: "Подробнее",
    };

    const renderCard = (item) => {
      const projectCard = document.createElement("div");

      projectCard.className = "projects__item project-card";
      projectCard.dataset.key = item.key;

      projectCard.innerHTML = `
        <div class="project-card__inner">
          <div class="project-card__content">
            <h3 class="project-card__title"><b>${item.title}</b>
              <br />${item.description[currentLang]}</h3>
            <div class="project-card__more-info">${moreInfo[currentLang]}</div>
            <img
              class="project-card__img"
              src="img/projects/preview/${item.img}.jpg"
              alt="${item.title}"
            />
          </div>
        </div>`;

      projectsList.appendChild(projectCard);
    };

    for (const card in data) {
      renderCard(data[card]);
    }
  };

  getData("../assets/projects-list.json", "GET")
    .then((res) => render(res))
    .catch((err) => {
      const errorMsg = {
        en: "Data loading error",
        ru: "Ошибка загрузки данных",
      };

      showNotification(errorMsg[currentLang], "check-no");
    });
};

export default renderProjects;
