"use strict";

if (process.env.NODE_ENV === "development") {
  import("../index.html");
  import("../ru/index.html");
}

import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";
import "../img/projects/preview/3d-glo.jpg";
import "../img/projects/preview/relax-live.jpg";
import "../img/projects/full/be-320w.png";
import "../img/projects/full/be-470w.png";
import "../img/projects/full/be-700w.png";
import "../img/projects/full/irvas-320w.png";
import "../img/projects/full/irvas-470w.png";
import "../img/projects/full/irvas-700w.png";
import "../img/projects/full/relax-live-320w.png";
import "../img/projects/full/relax-live-470w.png";
import "../img/projects/full/relax-live-700w.png";
import "../img/projects/full/3d-glo-320w.png";
import "../img/projects/full/3d-glo-470w.png";
import "../img/projects/full/3d-glo-700w.png";

import handlers from "./modules/handlers";
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
});
