type ElementsOrText = HTMLElement | HTMLElement[] | string;
const { isArray } = Array;
const tag = (tagName: string, style: string = '', children?: ElementsOrText) => {
    const el = document.createElement(tagName);
    if (style) {
        style.includes(':') ? el.setAttribute('style', style) : el.className = style;
    }
    el.append(...(isArray(children) ? children : [children]).filter(x => x != null));
    return el;
}

//@ts-ignore "event" is depricated in lib.d.ts in typescript. 
const event = (eventName: string, callback: () => ElementsOrText[], children: HTMLElement[]) => {
    children = isArray(children) ? children : [children];
    children.filter((x: HTMLElement | string) => x instanceof HTMLElement).forEach((x: HTMLElement) => x.addEventListener(eventName, callback));
    return children;
}

export { tag, event };
