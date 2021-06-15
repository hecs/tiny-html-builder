export declare type AttrsClassesStyles = string | {
    [key: string]: string;
};
declare const tag: <T>(tagName: string, config?: AttrsClassesStyles, children?: T) => HTMLElement;
declare const event: <T>(eventName: string, callback: EventListener | EventListenerObject, children: T) => T;
export { tag, event };
