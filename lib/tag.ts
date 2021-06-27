import type { h } from "preact";

export type AttrsClassesStyles = string | (Omit<h.JSX.HTMLAttributes, 'ref'> & {ref?: string});

const toFlatArray = (children): (HTMLElWithRef | string)[] => Array.isArray(children) ? children.flat(Infinity) : [children];

export const tag = <T>(tagName: string, config: AttrsClassesStyles = {}, children?: T): HTMLElement => {
    const el = document.createElement(tagName) as HTMLElWithRef;
    if (typeof config === 'string') {
        config?.includes(':') ? el.setAttribute('style', config) : el.className = config;
    } else if (config) {
        Object.entries(config).forEach(([key, value]) => key === "style" && typeof value !== 'string' ? Object.assign(el.style, value) : el.setAttribute(key, value));
        config.ref && ((el as any).ref = config.ref)
    }
    el.append(...toFlatArray(children).filter(c => c));
    return el;
}

export const event = <T>(eventName: string, callback: EventListener | EventListenerObject, children: T): T => {
    toFlatArray(children).forEach(c => c instanceof HTMLElement && c.addEventListener(eventName, callback));
    return children;
}

type HTMLElWithRef = (HTMLElement & { ref?: string });

export function getRefs(e: HTMLElWithRef | HTMLElWithRef[], refs = {}): { [key: string]: any } {
    if (Array.isArray(e)) {
        e.forEach(_e => getRefs(_e));
        return;
    }
    e.ref && (refs[e.ref] = e);
    Array.from(e.children).forEach((c) => {
        getRefs(c as HTMLElWithRef, refs)
    });
    return refs;
}

export const a = (config: AttrsClassesStyles, children?) => tag("a", config, children) as HTMLAnchorElement;
export const area = (config: AttrsClassesStyles, children?) => tag("area", config, children) as HTMLAreaElement;
export const article = (config: AttrsClassesStyles, children?) => tag("article", config, children) as HTMLElement;
export const audio = (config: AttrsClassesStyles, children?) => tag("audio", config, children) as HTMLAudioElement;
export const base = (config: AttrsClassesStyles, children?) => tag("base", config, children) as HTMLBaseElement;
export const blockquote = (config: AttrsClassesStyles, children?) => tag("blockquote", config, children) as HTMLQuoteElement;
export const body = (config: AttrsClassesStyles, children?) => tag("body", config, children) as HTMLBodyElement;
export const br = (config: AttrsClassesStyles, children?) => tag("br", config, children) as HTMLBRElement;
export const button = (config: AttrsClassesStyles, children?) => tag("button", config, children) as HTMLButtonElement;
export const canvas = (config: AttrsClassesStyles, children?) => tag("canvas", config, children) as HTMLCanvasElement;
export const caption = (config: AttrsClassesStyles, children?) => tag("caption", config, children) as HTMLTableCaptionElement;
export const col = (config: AttrsClassesStyles, children?) => tag("col", config, children) as HTMLTableColElement;
export const colgroup = (config: AttrsClassesStyles, children?) => tag("colgroup", config, children) as HTMLTableColElement;
export const data = (config: AttrsClassesStyles, children?) => tag("data", config, children) as HTMLDataElement;
export const datalist = (config: AttrsClassesStyles, children?) => tag("datalist", config, children) as HTMLDataListElement;
export const del = (config: AttrsClassesStyles, children?) => tag("del", config, children) as HTMLModElement;
export const details = (config: AttrsClassesStyles, children?) => tag("details", config, children) as HTMLDetailsElement;
export const dialog = (config: AttrsClassesStyles, children?) => tag("dialog", config, children) as HTMLDialogElement;
export const dir = (config: AttrsClassesStyles, children?) => tag("dir", config, children) as HTMLDirectoryElement;
export const div = (config: AttrsClassesStyles, children?) => tag("div", config, children) as HTMLDivElement;
export const dl = (config: AttrsClassesStyles, children?) => tag("dl", config, children) as HTMLDListElement;
export const embed = (config: AttrsClassesStyles, children?) => tag("embed", config, children) as HTMLEmbedElement;
export const fieldset = (config: AttrsClassesStyles, children?) => tag("fieldset", config, children) as HTMLFieldSetElement;
export const font = (config: AttrsClassesStyles, children?) => tag("font", config, children) as HTMLFontElement;
export const footer = (config: AttrsClassesStyles, children?) => tag("footer", config, children) as HTMLElement;
export const form = (config: AttrsClassesStyles, children?) => tag("form", config, children) as HTMLFormElement;
export const frame = (config: AttrsClassesStyles, children?) => tag("frame", config, children) as HTMLFrameElement;
export const frameset = (config: AttrsClassesStyles, children?) => tag("frameset", config, children) as HTMLFrameSetElement;
export const h1 = (config: AttrsClassesStyles, children?) => tag("h1", config, children) as HTMLHeadingElement;
export const h2 = (config: AttrsClassesStyles, children?) => tag("h2", config, children) as HTMLHeadingElement;
export const h3 = (config: AttrsClassesStyles, children?) => tag("h3", config, children) as HTMLHeadingElement;
export const h4 = (config: AttrsClassesStyles, children?) => tag("h4", config, children) as HTMLHeadingElement;
export const h5 = (config: AttrsClassesStyles, children?) => tag("h5", config, children) as HTMLHeadingElement;
export const h6 = (config: AttrsClassesStyles, children?) => tag("h6", config, children) as HTMLHeadingElement;
export const head = (config: AttrsClassesStyles, children?) => tag("head", config, children) as HTMLHeadElement;
export const header = (config: AttrsClassesStyles, children?) => tag("header", config, children) as HTMLElement;
export const hr = (config: AttrsClassesStyles, children?) => tag("hr", config, children) as HTMLHRElement;
export const html = (config: AttrsClassesStyles, children?) => tag("html", config, children) as HTMLHtmlElement;
export const iframe = (config: AttrsClassesStyles, children?) => tag("iframe", config, children) as HTMLIFrameElement;
export const img = (config: AttrsClassesStyles, children?) => tag("img", config, children) as HTMLImageElement;
export const input = (config: AttrsClassesStyles, children?) => tag("input", config, children) as HTMLInputElement;
export const ins = (config: AttrsClassesStyles, children?) => tag("ins", config, children) as HTMLModElement;
export const label = (config: AttrsClassesStyles, children?) => tag("label", config, children) as HTMLLabelElement;
export const legend = (config: AttrsClassesStyles, children?) => tag("legend", config, children) as HTMLLegendElement;
export const li = (config: AttrsClassesStyles, children?) => tag("li", config, children) as HTMLLIElement;
export const link = (config: AttrsClassesStyles, children?) => tag("link", config, children) as HTMLLinkElement;
export const map = (config: AttrsClassesStyles, children?) => tag("map", config, children) as HTMLMapElement;
export const marquee = (config: AttrsClassesStyles, children?) => tag("marquee", config, children) as HTMLMarqueeElement;
export const menu = (config: AttrsClassesStyles, children?) => tag("menu", config, children) as HTMLMenuElement;
export const meta = (config: AttrsClassesStyles, children?) => tag("meta", config, children) as HTMLMetaElement;
export const meter = (config: AttrsClassesStyles, children?) => tag("meter", config, children) as HTMLMeterElement;
export const object = (config: AttrsClassesStyles, children?) => tag("object", config, children) as HTMLObjectElement;
export const ol = (config: AttrsClassesStyles, children?) => tag("ol", config, children) as HTMLOListElement;
export const optgroup = (config: AttrsClassesStyles, children?) => tag("optgroup", config, children) as HTMLOptGroupElement;
export const option = (config: AttrsClassesStyles, children?) => tag("option", config, children) as HTMLOptionElement;
export const output = (config: AttrsClassesStyles, children?) => tag("output", config, children) as HTMLOutputElement;
export const p = (config: AttrsClassesStyles, children?) => tag("p", config, children) as HTMLParagraphElement;
export const param = (config: AttrsClassesStyles, children?) => tag("param", config, children) as HTMLParamElement;
export const picture = (config: AttrsClassesStyles, children?) => tag("picture", config, children) as HTMLPictureElement;
export const pre = (config: AttrsClassesStyles, children?) => tag("pre", config, children) as HTMLPreElement;
export const progress = (config: AttrsClassesStyles, children?) => tag("progress", config, children) as HTMLProgressElement;
export const q = (config: AttrsClassesStyles, children?) => tag("q", config, children) as HTMLQuoteElement;
export const script = (config: AttrsClassesStyles, children?) => tag("script", config, children) as HTMLScriptElement;
export const section = (config: AttrsClassesStyles, children?) => tag("section", config, children) as HTMLElement;
export const select = (config: AttrsClassesStyles, children?) => tag("select", config, children) as HTMLSelectElement;
export const slot = (config: AttrsClassesStyles, children?) => tag("slot", config, children) as HTMLSlotElement;
export const source = (config: AttrsClassesStyles, children?) => tag("source", config, children) as HTMLSourceElement;
export const span = (config: AttrsClassesStyles, children?) => tag("span", config, children) as HTMLSpanElement;
export const style = (config: AttrsClassesStyles, children?) => tag("style", config, children) as HTMLStyleElement;
export const table = (config: AttrsClassesStyles, children?) => tag("table", config, children) as HTMLTableElement;
export const tbody = (config: AttrsClassesStyles, children?) => tag("tbody", config, children) as HTMLTableSectionElement;
export const td = (config: AttrsClassesStyles, children?) => tag("td", config, children) as HTMLTableCellElement;
export const template = (config: AttrsClassesStyles, children?) => tag("template", config, children) as HTMLTemplateElement;
export const textarea = (config: AttrsClassesStyles, children?) => tag("textarea", config, children) as HTMLTextAreaElement;
export const tfoot = (config: AttrsClassesStyles, children?) => tag("tfoot", config, children) as HTMLTableSectionElement;
export const th = (config: AttrsClassesStyles, children?) => tag("th", config, children) as HTMLTableCellElement;
export const thead = (config: AttrsClassesStyles, children?) => tag("thead", config, children) as HTMLTableSectionElement;
export const time = (config: AttrsClassesStyles, children?) => tag("time", config, children) as HTMLTimeElement;
export const title = (config: AttrsClassesStyles, children?) => tag("title", config, children) as HTMLTitleElement;
export const tr = (config: AttrsClassesStyles, children?) => tag("tr", config, children) as HTMLTableRowElement;
export const track = (config: AttrsClassesStyles, children?) => tag("track", config, children) as HTMLTrackElement;
export const ul = (config: AttrsClassesStyles, children?) => tag("ul", config, children) as HTMLUListElement;
export const video = (config: AttrsClassesStyles, children?) => tag("video", config, children) as HTMLVideoElement;

/*
how to generate the code above:
// tagname/constructor-list from: https://stackoverflow.com/a/48048841


function getAllTagNames()
{
    let items = [];

    Object.getOwnPropertyNames(window).forEach(name =>
    {
        if(name.startsWith('HTML') && name.endsWith('Element') && window[name].prototype instanceof HTMLElement)
        {
            items.push({ constr: name, tagName: name.substr(4, name.length - 11).toLowerCase() });
        }
    });

    items.sort((leftItem, rightItem) =>
    {
        let left = leftItem.tagName;
        let right = rightItem.tagName;

        if(left.toLowerCase) { left = left.toLowerCase(); }
        if(right.toLowerCase) { right = right.toLowerCase(); }

        return left == right ? 0 : (left < right ? -1 : 1);
    });

    function insertSorted(item)
    {
        let index = 0;
        while(item.tagName > items[index].tagName) { index++; }
        items.splice(index, 0, item);
    }

    let disagreements = [];
    items = items.filter(item =>
    {
        let tagName = item.tagName;

        switch(tagName) // deprecated
        {
            case "keygen": return false;
        }

        let filter = tagName == "unknown" || document.createElement(tagName).constructor == HTMLUnknownElement;
        if(filter && tagName != "unknown") { disagreements.push(item); }

        return !filter;
    });

    disagreements = disagreements.filter(item =>
    {
        switch(item.tagName) // base constructor
        {
            case "media": return false;
        }

        return true;
    });

    disagreements.forEach(item => 
    {
        let tagName = item.tagName;

        function exchange(tagName)
        {
            insertSorted({ constr: item.constr, tagName: tagName });
        }

        switch(tagName)
        {
            case 'anchor':
                exchange('a');
                break;

            case 'directory':
                exchange('dir');
                break;

            case 'dlist':
                exchange('dl');
                break;

            case 'heading':
                exchange('h1');
                exchange('h2');
                exchange('h3');
                exchange('h4');
                exchange('h5');
                exchange('h6');
                break;

            case 'image':
                exchange('img');
                break;

            case 'mod':
                exchange('del');
                exchange('ins');
                break;

            case 'olist':
                exchange('ol');
                break;

            case 'paragraph':
                exchange('p');
                break;

            case 'quote':
                exchange('blockquote');
                exchange('q');
                break;

            case 'tablecaption':
                exchange('caption');
                break;

            case 'tablecell':
                exchange('th');
                exchange('td');
                break;

            case 'tablecol':
                exchange('col');
                exchange('colgroup');
                break;

            case 'tablerow':
                exchange('tr');
                break;

            case 'tablesection':
                exchange('tfoot');
                exchange('thead');
                exchange('tbody');
                break;

            case 'ulist':
                exchange('ul');
                break;

            default:
                console.log('disagree', tagName);
                if(console.warn && tagName != "") { console.warn("unknown tag name for " + item.constr); }
                break;
        }
    });
    insertSorted({tagName: "header", constr: "HTMLElement"})
    insertSorted({tagName: "footer", constr: "HTMLElement"})
    insertSorted({tagName: "article", constr: "HTMLElement"})
    insertSorted({tagName: "section", constr: "HTMLElement"})
    
    return items;
}
const list = getAllTagNames().map(a => `export const ${a.tagName} = (config: AttrsClassesStyles, children?) => tag("${a.tagName}", config, children) as ${a.constr};`);
console.log(list.join("\n"));

*/