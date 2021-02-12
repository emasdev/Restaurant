import addNode from './util/dom-nodes';

export default function generateHeader(node) {
  let parentNode = node;
  let tempNode = null;

  /* <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top"> */
  let childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'navbar navbar-expand-sm navbar-light bg-light fixed-top',
  });

  parentNode = childrenNode;

  /* <div class="container-fluid"> */
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'container-fluid',
  });

  parentNode = childrenNode;

  /* <a class="navbar-brand brand-title" href="index.html">The Japanese Taco</a> */
  childrenNode = addNode({
    parentNode,
    nodeName: 'a',
    className: 'navbar-brand brand-title',
    id: 'navbar-logo',
    attributes: {
      href: 'index.html',
    },
    text: 'The Japanese Taco',
  });

  /* <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */
  childrenNode = addNode({
    parentNode,
    nodeName: 'button',
    className: 'navbar-toggler',
    attributes: {
      type: 'button',
      'data-bs-toggle': 'collapse',
      'data-bs-target': '#navbarNavAltMarkup',
      'aria-controls': 'navbarNavAltMarkup',
      'aria-expanded': 'false',
      'aria-label': 'Toggle navigation',
    },
  });

  tempNode = childrenNode;

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'span',
    className: 'navbar-toggler-icon',
  });

  /*
  <div
  class="collapse
  navbar-collapse
  justify-content-end"
  id="navbarNavAltMarkup">
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'collapse navbar-collapse justify-content-end',
    id: 'navbarNavAltMarkup',
  });

  parentNode = childrenNode;

  /*
  <ul class="navbar-nav" id="main-menu"></ul>
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'ul',
    className: 'navbar-nav',
    id: 'main-menu',
  });

  parentNode = childrenNode;

  /*
    <li class="nav-link active" data-section="home">Home</li>
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'li',
    className: 'nav-link select-menu active',
    attributes: {
      'data-index': '1',
    },
    text: 'Home',
  });

  /*
    <li class="nav-link select-menu" data-section="menu">Menu</li>
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'li',
    className: 'nav-link select-menu',
    id: 'select-menu-menu',
    attributes: {
      'data-index': '2',
    },
    text: 'Menu',
  });
  /*
    <li class="nav-link" data-section="contact">Contact</li>
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'li',
    className: 'nav-link select-menu',
    attributes: {
      'data-index': '3',
    },
    text: 'Contact',
  });
}
