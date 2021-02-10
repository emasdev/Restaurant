export const run = () => {
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

  scene(0);
  function scene(index) {
    slides["slide-1"].classList.add("animate__animated", "animate__pulse");

    logo.classList.add("animate__animated", "animate__pulse");
    logo.style.setProperty("--animate-duration", "2s");

    menu.classList.add("animate__animated", "animate__pulse");
    menu.style.setProperty("--animate-duration", "3s");
    console.log(menu);
  }

  function clickTab(tab) {
    const section = document.getElementById("section-" + tab.dataset.section);
    // 1.- Remove active tabs
    removeClassForElements(tabs, "active");
    // 2.- Check where button came from and active tab
    if (tab.dataset.fromMenu) {
      selectMenuTabs.menu.classList.add("active");
    } else {
      tab.classList.add("active");
    }
    // 3.- Hide all sections
    // 3.1 transitions > from home to menu

    addClassForElements(sections, "d-none");
    // 4.- Show selected section
    section.classList.remove("d-none");
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
