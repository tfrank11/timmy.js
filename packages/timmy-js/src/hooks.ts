import { rerender } from "./render.js";
import { ICallbackArgs } from "./types.js";

export const hookIndexRef = { value: 0 };

const stateStore: unknown[] = [];

export const useState = <T>(defaultVal: T): [T, (newVal: T) => void] => {
  const index = hookIndexRef.value;
  hookIndexRef.value++;

  if (stateStore[index] === undefined) {
    stateStore[index] = defaultVal;
  }

  function setVal(newVal: T) {
    stateStore[index] = newVal;
    rerender();
  }

  return [stateStore[index] as T, setVal];
};

const callbackStore: ICallbackArgs[] = [];

export const useCallback = (
  fn: ICallbackArgs["fn"],
  deps?: ICallbackArgs["deps"],
) => {
  const cur = { fn, deps };
  const index = hookIndexRef.value;
  hookIndexRef.value++;

  if (callbackStore[index] === undefined) {
    callbackStore[index] = cur;
  }
  const prev = callbackStore[index];

  // No deps array -> change fn reference on every render
  if (!cur.deps) {
    return cur.fn;
  }

  // Invalid state
  if (cur.deps.length !== prev.deps?.length) {
    throw new Error("Dependency array length cannot change between renders");
  }

  // Check for deps array change
  for (let i = 0; i < cur.deps.length; i++) {
    const newDep = cur.deps[i];
    const oldDep = callbackStore[index].deps?.[i];
    if (!Object.is(newDep, oldDep)) {
      callbackStore[index] = cur;
      return cur.fn;
    }
  }

  // No deps change -> return previous fn reference
  return prev.fn;
};
