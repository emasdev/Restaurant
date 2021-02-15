import addNode from '../util/dom-nodes';

export default function generateHomeSection(node) {
  const parentNode = node;
  let tempNode = null;

  let childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'd-flex flex-column bg-main-circle text-center m-4 section',
    id: 'section-1',
  });

  tempNode = childrenNode;

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'h1',
    className: 'brand-title fw-bold',
    text: 'The Japanese Taco',
  });

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'hr',
  });

  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'h2',
    className: 'brand-title text-secondary',
    text: 'Gourmet japanese food with mexican recepies',
  });

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
