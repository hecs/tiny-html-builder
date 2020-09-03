type ElementsOrText = HTMLElement | HTMLElement[] | string;
const isArray = Array.isArray;
export function tag(tagName: string, style: string = '', children?: ElementsOrText) {
    const el = document.createElement(tagName);
    if (style) {
        style.includes(':') ? el.setAttribute('style', style) : el.className = style;
    }
    if (children) {
        el.append(...(isArray(children) ? children : [children]).filter(x => x != null));
    }
    return el;
}

export function event(eventName: string, callback: () => ElementsOrText[], children: HTMLElement[]) {
    children = isArray(children) ? children : [children];
    children.filter((x: HTMLElement | string) => typeof x !== 'string').forEach((x: HTMLElement) => x.addEventListener(eventName, callback));
    return children;
}
