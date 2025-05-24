import { useState } from "./src/hooks";
import { ComponentTree } from "./src/types";

const counter = (): ComponentTree => {
  const [count, setCount] = useState(1);

  return {
    type: "div",
    children: [
      {
        type: "div",
        style: "border: 1px solid green;",
        children: [`Count: ${count.toString()}`],
      },
      {
        type: "div",
        style: "display: flex; flex-direction: row; gap: 2px; width: 200px;",
        children: [
          {
            type: "button",
            children: ["decrement"],
            onClick: () => {
              setCount(count - 1);
            },
          },
          {
            type: "button",
            children: ["increment"],
            onClick: () => {
              setCount(count + 1);
            },
          },
        ],
      },
    ],
  };
};

const app = (): ComponentTree => {
  console.log("app called");

  return {
    type: "div",
    style: "display: flex; flex-direction: column;",
    children: [counter(), counter(), counter()],
  };
};

export default app;
