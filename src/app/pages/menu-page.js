import { addNode } from "../util/dom-nodes";

export const generateMenuSection = parentNode => {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
      <div class="d-flex flex-column bg-main-circle text-center m-4 section d-none" id="section-2">
  */
  let _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className:
      "d-flex flex-column bg-main-circle text-center m-4 section d-none",
    id: "section-2",
  });
  _parentNode = _childrenNode;

  /* 
        <h1 class="brand-title fw-bold">Menu</h1>
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "h1",
    className:
      "d-flex flex-column bg-main-circle text-center m-4 section d-none",
    text: "Menu",
  });
  /* 
        <hr>
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "hr",
  });
  /* 
        <div class="container">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "container",
  });
  _parentNode = _childrenNode;

  /* 
      <div class="row">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "row",
  });
  _parentNode = _childrenNode;

  /*
  Menu info
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-12 py-2 text-secondary",
    text: "Food",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Barbacoa",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$100",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Cochinita Pibil",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$120",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Sashimi",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$80",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Udon Tempura",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$150",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Okonomiyaki",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$200",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Pozole",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$69",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-12 py-2 text-secondary",
    text: "Drinks",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Mezcal",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$20",
  });

  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "Sake",
  });
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "col-6",
    text: "$20",
  });
};
