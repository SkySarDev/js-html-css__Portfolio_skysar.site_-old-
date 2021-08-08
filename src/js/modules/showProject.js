import getData from "./getData";
import popupShowHide from "./popupShowHide";

const showProject = (projectKey) => {
  const renderProject = (data) => {
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
          <div class="popup-project__description">${data.description}</div>
        </div>
        <div class="popup-project__nav row">
          ${data.link ? createButton(data.link, "link", "Demo") : ""}
          ${data.github ? createButton(data.github, "github", "GitHub") : ""}
        </div>
        <div class="popup-project__img">
          <img src="../img/projects/full/${data.img}" alt="${data.title}" />
        </div>`;

    projectField.appendChild(projectBody);

    popupShowHide(document.querySelector(".popup-project"), true);
  };

  getData("../assets/projects.json", "GET")
    .then((res) => renderProject(res[projectKey]))
    .catch((err) => console.log(err));
};

export default showProject;
