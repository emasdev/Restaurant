import addNode from '../util/dom-nodes';

const generateContactSection = node => {
  let parentNode = node;

  let childrenNode = addNode({
    parentNode,
    nodeName: 'div',
    className:
      'd-flex flex-column bg-main-circle text-center section d-none m-4',
    id: 'section-3',
  });
  parentNode = childrenNode;

  childrenNode = addNode({
    parentNode,
    nodeName: 'h1',
    className: 'brand-title fw-bold',
    text: 'Contact',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'hr',
  });

  childrenNode = addNode({
    parentNode,
    nodeName: 'p',
    className: 'brand-title text-secondary',
    text: `The Japanese Taco is an amazing concept in which you can taste the best
    japanese cousine with mexican ingredients and also order a sake for your tacos with some sushi. Ask for our
    secret menu...
    <iframe class="mx-auto mt-4" width="560" height="315" src="https://www.youtube.com/embed/2Yz6TGWgclU" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`,
  });
};

export default generateContactSection;
