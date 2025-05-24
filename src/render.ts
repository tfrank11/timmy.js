import { ComponentTree } from "./types";

export function render(root: ComponentTree) {
  // TODO: virtual dom, diffing
  updateDom(root);
}

function updateDom(tree: ComponentTree) {
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(createNode(tree));
}

function createNode(node: ComponentTree | string) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.type);
  for (const child of node.children) {
    element.appendChild(createNode(child));
  }
  if (node.style) {
    element.setAttribute("style", node.style);
  }

  return element;
}
