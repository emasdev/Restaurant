import addNode from "./util/dom-nodes";

export default function generateHeader(node) {
  let parentNode = node;
  let tempNode = null;

  let childrenNode = addNode({
    parentNode,
    nodeName: "div",
    className: "navbar navbar-expand-sm navbar-light bg-light fixed-top",
  });

  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: "div",
    className: "container-fluid",
  });

  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: "a",
    className: "navbar-brand brand-title",
    id: "navbar-logo",
    attributes: {
      href: "index.html",
    },
    text: "The Japanese Taco",
  });

  childrenNode = addNode({
    parentNode,
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

  tempNode = childrenNode;

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: "span",
    className: "navbar-toggler-icon",
  });

  childrenNode = addNode({
    parentNode,
    nodeName: "div",
    className: "collapse navbar-collapse justify-content-end",
    id: "navbarNavAltMarkup",
  });

  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: "ul",
    className: "navbar-nav",
    id: "main-menu",
  });

  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: "li",
    className: "nav-link select-menu active",
    attributes: {
      "data-index": "1",
    },
    text: "Home",
  });

  childrenNode = addNode({
    parentNode,
    nodeName: "li",
    className: "nav-link select-menu",
    id: "select-menu-menu",
    attributes: {
      "data-index": "2",
    },
    text: "Menu",
  });

  childrenNode = addNode({
    parentNode,
    nodeName: "li",
    className: "nav-link select-menu",
    attributes: {
      "data-index": "3",
    },
    text: "Contact",
  });
}
