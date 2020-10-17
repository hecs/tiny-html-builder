declare type ElementOrList = HTMLElement | HTMLElement[];
declare type ElementOrString = HTMLElement | string;
declare type ElementOrListOrText = ElementOrList | string;
declare const tag: (tagName: string, style?: string, children?: ElementOrListOrText) => HTMLElement;
declare const event: (eventName: string, callback: EventListener | EventListenerObject, children: ElementOrListOrText) => ElementOrString[];
export { tag, event };
