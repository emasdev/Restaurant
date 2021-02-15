import addNode from "./util/dom-nodes";

const generatePagesSection = node => {
  let parentNode = node;
  let tempNode = null;

  let childrenNode = addNode({
    parentNode,
    nodeName: "section",
    className: "d-flex align-items-stretch main-section",
  });
  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: "div",
    className: "overlay d-flex align-items-stretch",
  });
  tempNode = childrenNode;

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-1",
  });

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: "div",
    className: "bg-img h-100 bg-img-2",
  });

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: "div",
    className: "overlay bg-overlay",
  });

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: "div",
    id: "pages-section",
    className:
      "overlay d-flex justify-content-center align-items-center  overflow-hidden",
  });
};

export default generatePagesSection;
