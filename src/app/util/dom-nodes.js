const addNode = data => {
  if (!data.parentNode || !data.nodeName) return false;
  const node = document.createElement(data.nodeName);
  if (data.className) {
    node.className = data.className;
  }

  if (data.text) {
    node.innerHTML = data.text;
  }

  if (data.id) {
    node.id = data.id;
  }

  if (data.attributes) {
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of Object.entries(data.attributes)) {
      node.setAttribute(key, value);
    }
  }

  data.parentNode.append(node);
  return node;
};
export default addNode;
