export const run = () => {
  const tabs = document.getElementsByClassName("select-menu");
  const sections = document.getElementsByClassName("section");
  const selectMenu = {
    menu: document.getElementById("select-menu-menu"),
  };

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      clickTab(tab);
    });
  }

  function clickTab(tab) {
    console.log(tab);
    const section = document.getElementById("section-" + tab.dataset.section);
    removeClassForElements(tabs, "active");
    console.log(section);
    if (tab.dataset.fromMenu) {
      selectMenu.menu.classList.add("active");
    } else {
      tab.classList.add("active");
    }

    addClassForElements(sections, "d-none");
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
