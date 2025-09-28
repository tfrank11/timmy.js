# Timmy.js

Timmy.js is a declarative frontend framework generally based on React.

## 🚀 Features

#### Declarative components
- Describe how you want components to look and let timmy.js take care of DOM manipulation
- Example:
    ```typescript
    const App = () => {
        return {
            type: "div",
            style: "display: flex; flex-direction: column;",
            children: [
              {
                type: "h1",
                text: "Hello world!!",
              },
              {
                type: "button",
                text: "Click me",
                onClick: () => {
                    //...
                },
              },
            ],
        };
    };  
    ```
#### Performance
- Instead of painting the whole DOM each time, it will only update components whose state changed.

#### Hooks
- `useState`: persist state between renders and rerender upon changing state
    ```typescript
    const [count, setCount] = useState(1);
    ```
- `useCallback`: memoize functions between renders based on dependencies
    ```typescript
    const onAddTodo = useCallback(() => {
        setTodos([...todos, textInput]);
        setTextInput("");
    }, [textInput]);
    ```



## 📝 FAQ

### Why does this exist?

Mostly for the bit

## TODO
- [x] Basic "virtual dom", diffing, reconciliation
- [x] useState
- [x] useCallback
- [ ] useRef
- [ ] useEffect
- [ ] Adding / removing components
- [ ] More efficient list rendering using keys
- [ ] More efficient element reconciliation (ie dont remake entire component if just the text changed)