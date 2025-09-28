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

export type IDiffProps = {
  element: HTMLElement;
  newTree: ComponentTree;
  prevTree: ComponentTree | null;
  isRoot?: boolean;
};

export type IShallowTreeEquality = {
  type: boolean;
  style: boolean;
  text: boolean;
  onClick: boolean;
  onChange: boolean;
};
