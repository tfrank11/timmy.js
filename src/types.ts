type HtmlElementName = keyof HTMLElementTagNameMap;

export type ComponentTree = {
  type: HtmlElementName;
  children?: (ComponentTree | string)[];
};
