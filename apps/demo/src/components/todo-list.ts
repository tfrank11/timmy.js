import { useCallback, useState, ComponentTree } from "@timmy-js/core";

const TodoList = (): ComponentTree => {
  const [todos, setTodos] = useState<string[]>(["make todo list"]);

  const [textInput, setTextInput] = useState("");

  // @ts-expect-error todo
  const onChangeTextInput = useCallback((event: Event) => {
    const text = (event.currentTarget as { value?: string })?.value;
    setTextInput(text ?? "");
  }, []);

  const onAddTodo = useCallback(() => {
    setTodos([...todos, textInput]);
    setTextInput("");
  }, [textInput]);

  const deleteTodo = (indexToDelete: number) => {
    const newTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(newTodos);
  };

  return {
    type: "div",
    style: "display: flex; flex-direction: column;",
    children: [
      {
        type: "h2",
        text: "Todo List",
      },
      {
        type: "div",
        style: "display: flex; flex-direction: row; gap: 2px;",
        children: [
          {
            type: "input",
            text: textInput,
            onChange: onChangeTextInput,
          },
          {
            type: "button",
            text: "Add",
            onClick: onAddTodo,
          },
        ],
      },
      {
        type: "ul",
        style: "display: flex; flex-direction: column; gap: 2px;",
        children: todos.map((todo, i) => ({
          type: "div",
          style: "display: flex; flex-direction: row; gap: 2px;",
          children: [
            { type: "li", text: todo },
            {
              type: "button",
              text: "Done",
              onClick: () => {
                deleteTodo(i);
              },
            },
          ],
        })),
      },
    ],
  };
};

export default TodoList;
