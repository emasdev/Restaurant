import "./css/styles.css";
require("animate.css");
import { run } from "./app/app";
import { generateHeader } from "./app/header";
import { generateHomeSection } from "./app/home-page";
import { generateMenuSection } from "./app/menu-page";
import { generateContactSection } from "./app/contact-page";

window.onload = function() {
  generateHeader(document.body);
  generateHomeSection(document.body);
  generateMenuSection(document.body);
  generateContactSection(document.body);
  run();

  //run();
};
