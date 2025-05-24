import { render } from "./src/render";
import app from "./app";

render(app());

export function rerender() {
  console.log("rerender");
  render(app());
}
