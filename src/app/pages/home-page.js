import { addNode } from "../util/dom-nodes";

export function generateHomeSection(parentNode) {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
  <section class="section h-100" id="section-home">
  */
  let _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "section",
    className: "section h-100",
    id: "section-home",
  });

  _parentNode = _childrenNode;

  /* 
  <div class="overlay d-flex align-items-stretch">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "overlay d-flex align-items-stretch",
  });

  _tempNode = _childrenNode;

  /* 
    <div class="bg-img h-100 bg-img-1"></div>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-1",
  });

  /* 
    <div class="bg-img h-100 bg-img-2"></div>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-2",
  });

  /* 
    <div class="overlay bg-overlay d-flex justify-content-center align-items-center">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className:
      "overlay bg-overlay d-flex justify-content-center align-items-center",
  });

  _parentNode = _childrenNode;

  /* 
    <div class="d-flex flex-column bg-main-circle text-center">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "d-flex flex-column bg-main-circle text-center",
    id: "slide-1",
  });

  _tempNode = _childrenNode;

  /* 
    <h1 class="brand-title fw-bold">The Japanese Taco</h1>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "h1",
    className: "brand-title fw-bold",
    text: "The Japanese Taco",
  });

  /* 
        <hr>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "hr",
  });

  /* 
        <h2 class="brand-title text-secondary">Gourmet japanese food with mexican recepies</h2>

  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "h2",
    className: "brand-title text-secondary",
    text: "Gourmet japanese food with mexican recepies",
  });

  /* 
        <a class="link-secondary mt-4 select-menu data-fromMenu="true">Check menu</a>

  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "a",
    className: "link-secondary mt-4 select-menu",
    text: "Check menu",
    attributes: {
      "data-section": "menu",
      "data-from-menu": true,
    },
  });
}
