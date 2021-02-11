import { addNode } from "../util/dom-nodes";

export const generateMenuSection = parentNode => {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
    <section class="section d-none" id="section-menu">Menu</section>
  */
  let _childrenNode = addNode({
    parentNode: _parentNode,
    nodeName: "section",
    className: "section d-none",
    id: "section-menu",
    text: "Menu",
  });
};
