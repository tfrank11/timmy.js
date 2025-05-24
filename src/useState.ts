import { rerender } from "..";
import { hookIndexRef } from "./render";

const vals = [];

export const useState = <T>(defaultVal: T): [T, (newVal: T) => void] => {
  const index = hookIndexRef.value;
  hookIndexRef.value++;

  function setVal(newVal: T) {
    vals[index] = newVal;
    rerender();
  }

  return [vals?.[index] ?? defaultVal, setVal];
};
