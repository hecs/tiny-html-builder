type ElementOrList = HTMLElement | HTMLElement[];
type ElementOrString = HTMLElement | string;
type ElementOrListOrText = ElementOrList | string;

const tag = (tagName: string, style: string = '', children?: ElementOrListOrText) => {
    const el = document.createElement(tagName);
    style?.includes(':') ? el.setAttribute('style', style) : el.className = style;
    el.append(...[children].flat().filter(x => x != null));
    return el;
}

//@ts-ignore "event" is depricated in lib.d.ts in typescript. 
const event = (eventName: string, callback: EventListener | EventListenerObject, children: ElementOrListOrText): ElementOrString[] => {
    const c = [children].flat();
    c
        .filter((e: ElementOrString) => e instanceof HTMLElement)
        .forEach((e: HTMLElement) =>
            e.addEventListener(eventName, callback));
    return c;
}

export { tag, event };
