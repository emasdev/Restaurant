import { add_node } from "./util/dom-nodes";

export function generateHeader(parentNode) {
  let _parentNode = parentNode;
  let _tempNode;

  /* <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top"> */
  let _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "div",
    className: "navbar navbar-expand-sm navbar-light bg-light fixed-top",
  });

  _parentNode = _childrenNode;

  /* <div class="container-fluid"> */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "div",
    className: "container-fluid",
  });

  _parentNode = _childrenNode;

  /* <a class="navbar-brand brand-title" href="index.html">The Japanese Taco</a> */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "a",
    className: "navbar-brand brand-title",
    id: "navbar-logo",
    attributes: {
      href: "index.html",
    },
    text: "The Japanese Taco",
  });

  /* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "button",
    className: "navbar-toggler",
    attributes: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
    },
  });

  _tempNode = _childrenNode;

  _childrenNode = add_node({
    parentNode: _tempNode,
    nodeName: "span",
    className: "navbar-toggler-icon",
  });

  /*       
  <div 
  class="collapse 
  navbar-collapse 
  justify-content-end"
  id="navbarNavAltMarkup">
  */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "div",
    className: "collapse navbar-collapse justify-content-end",
    id: "navbarNavAltMarkup",
  });

  _parentNode = _childrenNode;

  /* 
  <ul class="navbar-nav" id="main-menu"></ul>
  */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "ul",
    className: "navbar-nav",
    id: "main-menu",
  });

  _parentNode = _childrenNode;

  /*
    <li class="nav-link active" data-section="home">Home</li>
  */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "li",
    className: "nav-link select-menu active",
    attributes: {
      "data-section": "home",
    },
    text: "Home",
  });

  /*
    <li class="nav-link select-menu" data-section="menu">Menu</li>
  */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "li",
    className: "nav-link select-menu",
    id: "select-menu-menu",
    attributes: {
      "data-section": "menu",
    },
    text: "Menu",
  });
  /*
    <li class="nav-link" data-section="contact">Contact</li>
  */
  _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "li",
    className: "nav-link select-menu",
    attributes: {
      "data-section": "contact",
    },
    text: "Contact",
  });
}
