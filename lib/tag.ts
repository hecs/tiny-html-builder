type ElementOrList = HTMLElement | HTMLElement[];
type ElementOrString = HTMLElement | string;
type ElementOrListOrString = ElementOrList | string;

const tag = (tagName: string, style: string = '', children?: ElementOrListOrString) => {
    const el = document.createElement(tagName);
    style?.includes(':') ? el.setAttribute('style', style) : el.className = style;
    el.append(...[children].flat().filter(x => x != null));
    return el;
}

//@ts-ignore "event" is depricated in lib.d.ts in typescript. 
const event = (eventName: string, callback: EventListener | EventListenerObject, children: ElementOrListOrString): ElementOrString[] => {
    const childrenArray = [children].flat();
    for (const c of childrenArray)
        if (c instanceof HTMLElement)
            c.addEventListener(eventName, callback);
    return childrenArray;
}

export { tag, event };
