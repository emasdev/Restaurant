import { addNode } from "../util/dom-nodes";

export function generateHomeSection(parentNode) {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
    <div class="d-flex flex-column bg-main-circle text-center m-4 section" id="section-1">

  */
  let _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "d-flex flex-column bg-main-circle text-center m-4 section",
    id: "section-1",
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
      "data-index": "2",
      "data-from-menu": true,
    },
  });
}
