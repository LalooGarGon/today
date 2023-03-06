console.log("main.js works!!!");

import timeCard from "./timeCard.js";
import theme from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  theme(".theme-button");
  timeCard("#time-section");
});
