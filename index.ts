import { render } from "./render";
import { ComponentTree } from "./types";

const app = (): ComponentTree => ({
  type: "div",
  children: ["root div"],
});

render(app());
