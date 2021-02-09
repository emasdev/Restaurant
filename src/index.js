import "./css/styles.css";
import { run } from "./app/app";
import { generateHomeSection } from "./app/home-page";
import { generateHeader } from "./app/header";

window.onload = function() {
  generateHeader(document.body);
  generateHomeSection(document.body);
  run();

  //run();
};
