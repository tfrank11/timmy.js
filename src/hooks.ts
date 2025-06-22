import { rerender } from "..";

export const hookIndexRef = { value: 0 };

// Make vals persistent between renders
const vals: any[] = [];

export const useState = <T>(defaultVal: T): [T, (newVal: T) => void] => {
  const index = hookIndexRef.value;
  hookIndexRef.value++;

  // Initialize the value if it doesn't exist
  if (vals[index] === undefined) {
    vals[index] = defaultVal;
  }

  function setVal(newVal: T) {
    vals[index] = newVal;
    rerender();
  }

  return [vals[index], setVal];
};
