"use strict";

if (process.env.NODE_ENV === "development") import("../index.html");
import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";
import "../img/projects/preview/relax-life.png";
import "../img/projects/full/be-320w.png";
import "../img/projects/full/be-470w.png";
import "../img/projects/full/be-700w.png";
import "../img/projects/full/irvas-320w.png";
import "../img/projects/full/irvas-470w.png";
import "../img/projects/full/irvas-700w.png";
import "../img/projects/full/relax-live-320w.png";
import "../img/projects/full/relax-live-470w.png";
import "../img/projects/full/relax-live-700w.png";

import handlers from "./modules/handlers";

document.addEventListener("DOMContentLoaded", () => {
  handlers();
});
