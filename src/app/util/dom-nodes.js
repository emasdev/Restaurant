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

  if (data.href) {
    this_node.href = data.href;
  }
  data.parentNode.append(this_node);
  return this_node;
}
