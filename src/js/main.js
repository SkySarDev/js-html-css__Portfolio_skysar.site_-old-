"use strict";

if (process.env.NODE_ENV === "development") {
  import("../index.html");
  import("../ru/index.html");
}

import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be.jpg";
import "../img/projects/preview/3d-glo.jpg";
import "../img/projects/preview/relax-live.jpg";
import "../img/projects/preview/pictures-art.jpg";
import "../img/projects/full/be-320w.png";
import "../img/projects/full/be-470w.png";
import "../img/projects/full/be-700w.png";
import "../img/projects/full/irvas-320w.png";
import "../img/projects/full/irvas-470w.png";
import "../img/projects/full/irvas-700w.png";
import "../img/projects/full/relax-live-320w.png";
import "../img/projects/full/relax-live-470w.png";
import "../img/projects/full/relax-live-700w.png";
import "../img/projects/full/pictures-art-320w.png";
import "../img/projects/full/pictures-art-470w.png";
import "../img/projects/full/pictures-art-700w.png";

import handlers from "./modules/handlers";
import renderProjects from "./modules/renderProjects";
import { getCurrentLang } from "./modules/languageFuncs";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("lang")) {
    const currentLanguage = getCurrentLang();

    if (window.location.pathname === "/" && currentLanguage === "ru") {
      window.location.replace("/ru");
    }

    if (window.location.pathname === "/ru" && currentLanguage === "en") {
      window.location.replace("/");
    }
  }

  handlers();
  renderProjects();
});
