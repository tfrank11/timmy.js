type HtmlElementName = keyof HTMLElementTagNameMap;

export type ComponentTree = {
  type: HtmlElementName;
  style?: Partial<CSSStyleDeclaration>;
  children?: (ComponentTree | string)[];
};
