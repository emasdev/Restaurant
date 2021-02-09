export function add_node(data) {
  if (!data.parentNode || !data.nodeName) return;
  const this_node = document.createElement(data.nodeName);
  if (data.className) {
    this_node.className = data.className;
  }

  if (data.text) {
    this_node.innerHTML = data.text;
  }

  if (data.id) {
    this_node.id = data.id;
  }

  if (data.attributes) {
    for (const [key, value] of Object.entries(data.attributes)) {
      this_node.setAttribute(key, value);
    }
  }

  data.parentNode.append(this_node);
  return this_node;
}
