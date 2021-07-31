if (process.env.NODE_ENV === "development") import("../index.html");
import "../scss/main.scss";

import "../img/projects/preview/irvas.jpg";
import "../img/projects/preview/be_.jpg";

import { overflow } from "./modules/services";
import handlers from "./modules/handlers";

overflow("about");
handlers();
