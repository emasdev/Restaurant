import playTransition from "./util/animate-transitions";

const run = () => {
  let sectionIndex = 1;
  const sections = document.getElementsByClassName("section");

  const slides = {
    "slide-1": document.getElementById("section-1"),
    "slide-2": document.getElementById("section-2"),
    "slide-3": document.getElementById("section-3"),
  };

  const tabs = document.getElementsByClassName("select-menu");

  function hasClass(element, className) {
    return ` ${element.className} `.indexOf(` ${className} `) > -1;
  }

  function removeClassForElements(elements, className) {
    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index];
      if (hasClass(element, className)) {
        element.classList.remove(className);
      }
    }
  }

  function addClassForElements(elements, className) {
    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index];
      if (!hasClass(element, className)) {
        element.classList.add(className);
      }
    }
  }

  function initAnimation() {
    playTransition({
      node: slides["slide-1"],
      animation: "pulse",
    });
  }
  initAnimation();

  function clickTab(tab) {
    const fromIndex = sectionIndex;
    const toIndex = parseInt(tab.dataset.index, 10);
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

    const fromSection = document.getElementById(`section-${fromIndex}`);
    const toSection = document.getElementById(`section-${toIndex}`);
    // .- Select transition
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

  for (let index = 0; index < tabs.length; index += 1) {
    const tab = tabs[index];
    tab.addEventListener("click", () => {
      clickTab(tab);
    });
  }
};

export default run;
