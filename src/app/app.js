import { playTransition } from "./util/animate-transitions";

export const run = () => {
  let sectionIndex = 1;
  const dom = {
    tabs: document.getElementsByClassName("select-menu"),
  };

  const sections = document.getElementsByClassName("section");
  const logo = document.getElementById("navbar-logo");
  const menu = document.getElementById("main-menu");
  const slides = {
    "slide-1": document.getElementById("section-1"),
    "slide-2": document.getElementById("section-2"),
    "slide-3": document.getElementById("section-3"),
  };

  const tabs = document.getElementsByClassName("select-menu");

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      clickTab(tab);
    });
  }

  //initAnimation();
  function initAnimation() {
    playTransition({
      node: slides["slide-1"],
      animation: "pulse",
    });
  }

  function clickTab(tab) {
    const fromIndex = sectionIndex;
    const toIndex = parseInt(tab.dataset.index);
    if (fromIndex === toIndex) {
      return;
    }
    // 1.- Remove active tabs
    removeClassForElements(tabs, "active");
    // 2.- Check where button came from and active tab
    if (tab.dataset.fromMenu) {
      document.getElementById("tab-2").classList.add("active");
    } else {
      tab.classList.add("active");
    }

    // console.log(`fromIndex: ${fromIndex} toIndex: ${toIndex}`);
    const fromSection = document.getElementById("section-" + fromIndex);
    const toSection = document.getElementById("section-" + toIndex);
    //.- Select transition
    if (fromIndex < toIndex) {
      playTransition({
        node: fromSection,
        animation: "fadeOutLeft",
      }).then(() => {
        addClassForElements(sections, "d-none");
        toSection.classList.remove("d-none");
        playTransition({
          node: toSection,
          animation: "fadeInRight",
        });
      });
    } else {
      playTransition({
        node: fromSection,
        animation: "fadeOutRight",
      }).then(() => {
        addClassForElements(sections, "d-none");
        toSection.classList.remove("d-none");
        playTransition({
          node: toSection,
          animation: "fadeInLeft",
        });
      });
    }

    sectionIndex = toIndex;
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
