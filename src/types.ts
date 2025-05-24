type HtmlElementName = keyof HTMLElementTagNameMap;

export type ComponentTree = {
  type: HtmlElementName;
  style?: string;
  children?: (ComponentTree | string)[];
};
