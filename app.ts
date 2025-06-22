import { useState } from "./src/hooks";
import { ComponentTree } from "./src/types";

interface CounterProps {
  borderColor: string;
}

const counter = ({ borderColor }: CounterProps): ComponentTree => {
  const [count, setCount] = useState(1);

  return {
    type: "div",
    children: [
      {
        type: "div",
        style: `border: 2px solid ${borderColor};`,
        text: `Count: ${count.toString()}`,
      },
      {
        type: "div",
        style: "display: flex; flex-direction: row; gap: 2px; width: 200px;",
        children: [
          {
            type: "button",
            text: "decrement",
            onClick: () => {
              setCount(count - 1);
            },
          },
          {
            type: "button",
            text: "increment",
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
  return {
    type: "div",
    style: "display: flex; flex-direction: column;",
    children: [
      {
        type: "h1",
        text: "Yo yo yo check out these buttons",
      },
      counter({ borderColor: "red" }),
      counter({ borderColor: "green" }),
      counter({ borderColor: "blue" }),
    ],
  };
};

export default app;
