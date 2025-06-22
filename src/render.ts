import { hookIndexRef } from "./hooks";
import { ComponentTree } from "./types";
import { isTreeEqualShallow } from "./utils";

let prevTree: ComponentTree | null = null;

export function render(newTree: ComponentTree) {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("no root element found");
  }
  hookIndexRef.value = 0;
  diffAndUpdate({ element: root, newTree, prevTree, isRoot: true });
  prevTree = newTree;
}

function diffAndUpdate(props: {
  element: HTMLElement;
  newTree: ComponentTree;
  prevTree: ComponentTree | null;
  isRoot?: boolean;
}) {
  const { element, newTree, prevTree, isRoot } = props;

  if (!isTreeEqualShallow(newTree, prevTree)) {
    const node = createNode(newTree, isRoot);
    element.replaceWith(node);
    return;
  }

  if (!element?.children?.length) {
    return;
  }

  const children = Array.from(element.children);

  for (let i = 0; i < children.length; i++) {
    const oldChildTree = prevTree?.children?.[i];
    const newChildTree = newTree?.children?.[i];

    const childElement = children[i] as HTMLElement;
    if (!newChildTree) {
      throw new Error(
        "No child tree found. Deleting components is not yet supported."
      );
    }

    diffAndUpdate({
      element: childElement,
      newTree: newChildTree,
      prevTree: oldChildTree ?? null,
    });
  }
}

function createNode(node: ComponentTree | string, isRoot?: boolean) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.type);
  if (isRoot) {
    element.id = "root";
  }
  for (const child of node?.children ?? []) {
    element.appendChild(createNode(child));
  }
  if (node.style) {
    element.setAttribute("style", node.style);
  }

  if (node.text) {
    element.textContent = node.text;
  }

  if (node.onClick) {
    element.onclick = node.onClick;
  }

  if (node.onChange) {
    element.oninput = node.onChange;
  }

  if (node.type === "input" && node.text) {
    element.setAttribute("value", node.text);
  }

  return element;
}
