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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFn = (...args: any[]) => any;

export type UseCallback<T extends AnyFn = () => void> = (
  fn: T,
  deps: unknown[],
) => T;

export type IUseCallbackArgs<T extends AnyFn = () => void> = Parameters<
  UseCallback<T>
>;
