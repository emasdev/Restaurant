import addNode from '../util/dom-nodes';

const generateMenuSection = node => {
  let parentNode = node;

  let childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className:
      'd-flex flex-column bg-main-circle text-center m-4 section d-none',
    id: 'section-2',
  });
  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: 'h1',
    className:
      'd-flex flex-column bg-main-circle text-center m-4 section d-none',
    text: 'Menu',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'hr',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'container',
  });
  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'row',
  });
  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-12 py-2 text-secondary',
    text: 'Food',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Barbacoa',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$100',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Cochinita Pibil',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$120',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Sashimi',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$80',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Udon Tempura',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$150',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Okonomiyaki',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$200',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Pozole',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$69',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-12 py-2 text-secondary',
    text: 'Drinks',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Mezcal',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$20',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: 'Sake',
  });
  childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className: 'col-6',
    text: '$20',
  });
};

export default generateMenuSection;
