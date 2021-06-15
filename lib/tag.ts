export type AttrsClassesStyles = string | { [key: string]: string };

const toFlatArray = (children): HTMLElement[] => Array.isArray(children) ? children.flat(Infinity) : [children];

const tag = <T>(tagName: string, config: AttrsClassesStyles = {}, children?: T): HTMLElement => {
    const el = document.createElement(tagName);
    if (typeof config === 'string') {
        config?.includes(':') ? el.setAttribute('style', config) : el.className = config;
    } else {
        Object.entries(config).forEach(([key, value]) => el.setAttribute(key, value));
    }
    el.append(...toFlatArray(children).filter(c => c));
    return el;
}

const event = <T>(eventName: string, callback: EventListener | EventListenerObject, children: T): T => {
    toFlatArray(children).forEach(c => c instanceof HTMLElement && c.addEventListener(eventName, callback));
    return children;
}

export { tag, event };
