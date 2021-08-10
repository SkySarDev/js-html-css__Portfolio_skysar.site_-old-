import getData from "./getData";
import popupShowHide from "./popupShowHide";

const showProjectPopup = (projectKey) => {
  const renderProject = (data) => {
    const lang = localStorage.getItem("lang") || "en";
    const projectField = document.querySelector(".popup-project__field");
    const projectBody = document.createElement("div");

    const createButton = (url, tag, text) => `
        <div class="col-5 col-sm-4 col-md-3 col-lg-2">
          <a href="${url}" target="_blank">
            <div class="popup-project__button button">
              <svg class="popup-project__icon">
                <use xlink:href="#${tag}"></use>
              </svg>
              ${text}
            </div>
          </a>
        </div>`;

    projectField.textContent = "";
    projectBody.classList.add("popup-project__body");

    projectBody.innerHTML = `
        <div class="popup-project__header">
          <h4 class="popup-project__title">${data.title}</h4>
          <div class="popup-project__description">
            ${data.description[lang]}
          </div>
        </div>
        <div class="popup-project__nav row">
          ${data.link ? createButton(data.link, "link", "Demo") : ""}
          ${data.github ? createButton(data.github, "github", "GitHub") : ""}
        </div>
        <div class="popup-project__img">
          <img srcset="../img/projects/full/${data.img}-320w.png 400w,
               ../img/projects/full/${data.img}-470w.png 470w,
               ../img/projects/full/${data.img}-700w.png 700w"
               sizes="(max-width: 400px) 400px, (max-width: 767px) 470px, 700px"
               src="../img/projects/full/${data.img}-700w.png"
               alt="${data.title}" />
        </div>`;

    projectField.appendChild(projectBody);

    popupShowHide(document.querySelector(".popup-project"), true);
  };

  getData("../assets/projects.json", "GET")
    .then((res) => renderProject(res[projectKey]))
    .catch((err) => console.log(err));
};

export default showProjectPopup;
