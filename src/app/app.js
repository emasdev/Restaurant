export const run = () => {

  const tabs = document.getElementsByClassName('nav-link');
  const sections = document.getElementsByClassName('section');
  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      const section = document.getElementById('section-' + tab.dataset.section);
      removeClassForElements(tabs,'active');
      tab.classList.add('active');
      addClassForElements(sections,'d-none');
      section.classList.remove('d-none');
    });
  }

  function removeClassForElements(elements, className){
    for (const element of elements) {
      if(hasClass(element, className)){
        element.classList.remove(className);
      }
    }
  }

  function addClassForElements(elements, className){
    for (const element of elements) {
      if(!hasClass(element, className)){
        element.classList.add(className);
      }
    }
  }

  function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
  }
};