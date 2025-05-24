import { rerender } from "..";

export const hookIndexRef = { value: 0 };

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
