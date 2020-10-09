declare type ElementsOrText = HTMLElement | HTMLElement[] | string;
declare const tag: (tagName: string, style?: string, children?: ElementsOrText) => HTMLElement;
declare const event: (eventName: string, callback: () => ElementsOrText[], children: HTMLElement[]) => HTMLElement[];
export { tag, event };
