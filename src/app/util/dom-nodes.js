export function addNode(data) {
  if (!data.parentNode || !data.nodeName) return;
  const _node = document.createElement(data.nodeName);
  if (data.className) {
    _node.className = data.className;
  }

  if (data.text) {
    _node.innerHTML = data.text;
  }

  if (data.id) {
    _node.id = data.id;
  }

  if (data.attributes) {
    for (const [key, value] of Object.entries(data.attributes)) {
      _node.setAttribute(key, value);
    }
  }

  data.parentNode.append(_node);
  return _node;
}
