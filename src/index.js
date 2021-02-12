import "./css/styles.css";
require("animate.css");
import { run } from "./app/app";
import { generateHeader } from "./app/header";
import { generatePagesSection } from "./app/pages";
import { generateHomeSection } from "./app/pages/home-page";
import { generateMenuSection } from "./app/pages/menu-page";
import { generateContactSection } from "./app/pages/contact-page";

window.onload = function() {
  const content = document.getElementById("content");
  generateHeader(content);
  generatePagesSection(content);

  const pagesContent = document.getElementById("pages-section");
  generateHomeSection(pagesContent);
  generateMenuSection(pagesContent);
  generateContactSection(pagesContent);

  run();

  //run();
};
