import addNode from '../util/dom-nodes';

export default function generateHomeSection(node) {
  const parentNode = node;
  let tempNode = null;

  /*
    <div class="d-flex flex-column bg-main-circle text-center m-4 section" id="section-1">

  */
  let childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'd-flex flex-column bg-main-circle text-center m-4 section',
    id: 'section-1',
  });

  tempNode = childrenNode;

  /*
    <h1 class="brand-title fw-bold">The Japanese Taco</h1>
  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'h1',
    className: 'brand-title fw-bold',
    text: 'The Japanese Taco',
  });

  /*
        <hr>
  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'hr',
  });

  /*
        <h2 class="brand-title text-secondary">Gourmet japanese food with mexican recepies</h2>

  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'h2',
    className: 'brand-title text-secondary',
    text: 'Gourmet japanese food with mexican recepies',
  });

  /*
        <a class="link-secondary mt-4 select-menu data-fromMenu="true">Check menu</a>

  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'a',
    className: 'link-secondary mt-4 select-menu',
    text: 'Check menu',
    attributes: {
      'data-index': '2',
      'data-from-menu': true,
    },
  });
}
