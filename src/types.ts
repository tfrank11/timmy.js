type HtmlElementName = keyof HTMLElementTagNameMap;

export type ComponentTree = {
  type: HtmlElementName;
  style?: string;
  children?: ComponentTree[];
  text?: string;
  onClick?: (evt: MouseEvent) => void;
};

export type ICallbackArgs = {
  fn: (v: unknown) => unknown;
  deps?: unknown[];
};
