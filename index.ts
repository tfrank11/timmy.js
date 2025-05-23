import { ComponentTree } from "./src/types";
import { render } from "./src/render";

const app = (): ComponentTree => ({
  type: "div",
  children: ["root div"],
});

const tree = app()
render(tree);
