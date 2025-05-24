import { ComponentTree } from "./src/types";
import { render } from "./src/render";

const app = (): ComponentTree => {
  return {
    type: "div",
    style: "display: flex; flex-direction: column;",
    children: [
      {
        type: "div",
        style: "border: 1px solid green;",
        children: ["1"],
      },
      {
        type: "div",
        style: "border: 1px solid red;",
        children: ["2"],
      },
      {
        type: "div",
        style: "border: 1px solid blue;",
        children: ["3"],
      },
    ],
  };
};

const tree = app();
render(tree);
