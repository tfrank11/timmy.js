type HtmlElementName = keyof HTMLElementTagNameMap;

export type TimmyFC<T = void> = T extends void
  ? () => ComponentTree
  : (props: T) => ComponentTree;

export type ComponentTree = {
  type: HtmlElementName;
  style?: string;
  children?: ComponentTree[];
  text?: string;
  onClick?: (evt: MouseEvent) => void;
  onChange?: (evt: Event) => void;
};

export type ICallbackArgs = {
  fn: (v: unknown) => unknown;
  deps?: unknown[];
};
