import { addNode } from "./util/dom-nodes";
export const generatePagesSection = parentNode => {
  let _parentNode = parentNode;
  let _tempNode;

  /*  <section class="d-flex align-items-stretch main-section">
  */
  let _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "section",
    className: "d-flex align-items-stretch main-section",
  });
  _parentNode = _childrenNode;

  /*  <div class="overlay d-flex align-items-stretch">
  */
  _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "div",
    className: "overlay d-flex align-items-stretch",
  });
  _tempNode = _childrenNode;

  /*  <div class="bg-img h-100 bg-img-1"></div>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-1",
  });

  /*  <div class="bg-img h-100 bg-img-2"></div>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-2",
  });

  /*  <div class="overlay bg-overlay"></div>
  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    className: "overlay bg-overlay",
  });

  /* 
    <div class="overlay d-flex justify-content-center align-items-center  overflow-hidden">

  */
  _childrenNode = addNode({
    parentNode: _tempNode,
    nodeName: "div",
    id: "pages-section",
    className:
      "overlay d-flex justify-content-center align-items-center  overflow-hidden",
  });
};
