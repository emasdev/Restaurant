import addNode from './util/dom-nodes';

export default function generatePagesSection(node) {
  let parentNode = node;
  let tempNode = null;

  /*  <section class="d-flex align-items-stretch main-section">
  */
  let childrenNode = addNode({
    parentNode,
    nodeName: 'section',
    className: 'd-flex align-items-stretch main-section',
  });
  parentNode = childrenNode;

  /*  <div class="overlay d-flex align-items-stretch">
  */
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'overlay d-flex align-items-stretch',
  });
  tempNode = childrenNode;

  /*  <div class="bg-img h-100 bg-img-1"></div>
  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'div',
    className: 'bg-img h-100 bg-img-1',
  });

  /*  <div class="bg-img h-100 bg-img-2"></div>
  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'div',
    className: 'bg-img h-100 bg-img-2',
  });

  /*  <div class="overlay bg-overlay"></div>
  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'div',
    className: 'overlay bg-overlay',
  });

  /*
    <div class="overlay d-flex justify-content-center align-items-center  overflow-hidden">

  */
  childrenNode = addNode({
    parentNode: tempNode,
    nodeName: 'div',
    id: 'pages-section',
    className:
      'overlay d-flex justify-content-center align-items-center  overflow-hidden',
  });
}
