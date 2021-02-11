import { playTransition } from "./util/animate-transitions";

export const run = () => {
  let sectionIndex = 0;
  const dom = {
    tabs: document.getElementsByClassName("select-menu"),
  };

  const sections = document.getElementsByClassName("section");
  const logo = document.getElementById("navbar-logo");
  const menu = document.getElementById("main-menu");
  const slides = {
    "slide-1": document.getElementById("slide-1"),
    "slide-2": document.getElementById("slide-2"),
    "slide-3": document.getElementById("slide-3"),
  };
  const tabs = document.getElementsByClassName("select-menu");
  const selectMenuTabs = {
    menu: document.getElementById("select-menu-menu"),
  };

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      clickTab(tab);
    });
  }

  //scene(sectionIndex);
  function scene(index) {
    return new Promise((resolve, reject) => {
      switch (sectionIndex) {
        // Intro
        case 0:
          playTransition({
            node: slides["slide-1"],
            animation: "pulse",
          }).then(() => {
            resolve();
          });
          break;
        // From left to right
        case 1:
          playTransition({
            node: slides["slide-1"],
            animation: "fadeOutLeft",
          }).then(() => {
            console.log("finished animation");
            resolve();
          });
          break;

        default:
          resolve("error");
          break;
      }
    });

    // logo.classList.add("animate__animated", "animate__pulse");
    // logo.style.setProperty("--animate-duration", "2s");
    // logo.addEventListener("animationend", () => {
    //   this.classList.remove("animate__animated", "animate__pulse");
    // });

    // menu.classList.add("animate__animated", "animate__pulse");
    // menu.style.setProperty("--animate-duration", "3s");
    // menu.addEventListener("animationend", () => {
    //   this.classList.remove("animate__animated", "animate__pulse");
    // });
  }

  function clickTab(tab) {
    const sectionName = tab.dataset.section;
    const section = document.getElementById("section-" + sectionName);

    // 1.- Remove active tabs
    removeClassForElements(tabs, "active");
    // 2.- Check where button came from and active tab
    if (tab.dataset.fromMenu) {
      selectMenuTabs.menu.classList.add("active");
    } else {
      tab.classList.add("active");
    }

    if (sectionIndex == 0) {
      sectionIndex = 1;
    }
    console.log("algo por aca");
    console.log(section);
    addClassForElements(sections, "d-none");
    section.classList.remove("d-none");

    // scene(sectionIndex).then(() => {
    //   addClassForElements(sections, "d-none");
    //   // 4.- Show selected section
    //   section.classList.remove("d-none");
    // });
    // 3.- Hide all sections
    // 3.1 transitions > from home to menu
  }

  function removeClassForElements(elements, className) {
    for (const element of elements) {
      if (hasClass(element, className)) {
        element.classList.remove(className);
      }
    }
  }

  function addClassForElements(elements, className) {
    for (const element of elements) {
      if (!hasClass(element, className)) {
        element.classList.add(className);
      }
    }
  }

  function hasClass(element, className) {
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
  }
};
