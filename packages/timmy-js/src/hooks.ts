import { rerender } from "./render.js";
import { AnyFn, UseCallbackArgs, UseCallbackRtn } from "./types.js";

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

const callbackStore: UseCallbackArgs[] = [];

export const useCallback = <T extends AnyFn>(
  ...args: UseCallbackArgs<T>
): UseCallbackRtn<T> => {
  const [fn, deps] = args;
  const cur: UseCallbackArgs<T> = [fn, deps];
  const index = hookIndexRef.value;
  hookIndexRef.value++;

  if (callbackStore[index] === undefined) {
    callbackStore[index] = cur;
  }
  const prev = callbackStore[index] as UseCallbackArgs<T>;
  const [prevFn, prevDeps] = prev;

  // No deps array -> change fn reference on every render
  if (!deps) {
    return fn;
  }

  // Invalid state
  if (deps.length !== prevDeps?.length) {
    throw new Error("Dependency array length cannot change between renders");
  }

  // Check for deps array change
  for (let i = 0; i < deps.length; i++) {
    const newDep = deps[i];
    const oldDep = prevDeps?.[i];
    if (!Object.is(newDep, oldDep)) {
      callbackStore[index] = cur;
      return fn;
    }
  }

  // No deps change -> return previous fn reference
  return prevFn;
};
