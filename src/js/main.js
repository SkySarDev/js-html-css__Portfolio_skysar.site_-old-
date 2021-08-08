"use strict";

if (process.env.NODE_ENV === "development") import("../index.html");
import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";
import "../img/projects/preview/relax-life.png";
import "../img/projects/full/be-full.png";
import "../img/projects/full/irvas-full.png";
import "../img/projects/full/relax-live-full.png";

import handlers from "./modules/handlers";

document.addEventListener("DOMContentLoaded", () => {
  handlers();
});
