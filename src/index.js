import "./css/styles.css";
require("animate.css");
import { run } from "./app/app";
import { generateHeader } from "./app/header";
import { generateHomeSection } from "./app/pages/home-page";
import { generateMenuSection } from "./app/pages/menu-page";
import { generateContactSection } from "./app/pages/contact-page";
import { generatePages } from "./app/pages";

window.onload = function() {
  const content = document.getElementById("content");
  // generateHeader(content);
  // generateHomeSection(content);
  // generateMenuSection(content);
  // generateContactSection(content);
  run();

  //run();
};
