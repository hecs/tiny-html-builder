type ElementsOrText = HTMLElement | HTMLElement[] | string;

export function tag(tagName: string, style: string = '', children?: ElementsOrText) {
  const el = document.createElement(tagName);
  if (style) {
    style.includes(':') ? el.setAttribute('style', style) : el.className = style;
  }
  if (children) {
    el.append(...(Array.isArray(children) ? children : [children]).filter(x => x != null));
  }
  return el;
}