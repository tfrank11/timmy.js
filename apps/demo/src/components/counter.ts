import { useCallback, useState, ComponentTree, TimmyFC } from "@timmy-js/core";

interface CounterProps {
  borderColor: string;
}

const counter = ({ borderColor }: CounterProps): ComponentTree => {
  const [count, setCount] = useState(1);

  const onClickIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onClickDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

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
            onClick: onClickDecrement,
          },
          {
            type: "button",
            text: "increment",
            onClick: onClickIncrement,
          },
        ],
      },
    ],
  };
};

const CounterApp: TimmyFC = () => {
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

export default CounterApp;
