import { ComponentTree } from "./types";

export function isTreeEqualShallow(
  a: ComponentTree | null,
  b: ComponentTree | null
): boolean {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }

  const conditions = [
    a.type === b.type,
    a.text === b.text,
    isEqual(a.style, b.style),
    a.onClick === b.onClick,
    a.children?.length === b.children?.length,
  ];

  return !conditions.includes(false);
}

export function isEqual(a: any, b: any): boolean {
  if (typeof a === "object" && typeof b === "object") {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (Array.isArray(a) || Array.isArray(b)) {
      return false;
    }
    const aEntries = Object.entries(a);
    const bEntries = Object.entries(b);
    if (aEntries.length !== bEntries.length) {
      return false;
    }
    for (const [k, v] of aEntries) {
      if (!isEqual(v, b[k])) {
        return false;
      }
    }
    return true;
  }

  if (typeof a === "object" || typeof b === "object") {
    return false;
  }

  return a === b;
}
