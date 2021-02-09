import { add_node } from "./util/dom-nodes";

export const generateMenuSection = parentNode => {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
    <section class="section d-none" id="section-menu">Menu</section>
  */
  let _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "section",
    className: "section d-none",
    id: "section-menu",
    text: "Menu",
  });
};
