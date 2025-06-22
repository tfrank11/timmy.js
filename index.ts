import { render } from "./src/render";
import app from "./app";

render(app());

export function rerender() {
  render(app());
}
