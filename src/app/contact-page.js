import { add_node } from "./util/dom-nodes";

export const generateContactSection = parentNode => {
  let _parentNode = parentNode;
  let _tempNode;

  /* 
  <section class="section d-none" id="section-contact">Contact</section> -->
  */
  let _childrenNode = add_node({
    parentNode: _parentNode,
    nodeName: "section",
    className: "section d-none",
    id: "section-contact",
    text: "Contact",
  });
};
