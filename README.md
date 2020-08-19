# tiny-html-builder

Tiny helper for creating html fragments written in typescript

__Example__
```typescript


// 1. Create shorthand functions for tag for your elements:

const div = (style: string, children?: ElementOrText) => tag('div', style, children);
const p = (style?: string, children?: ElementOrText) => tag('p', style, children);
const bold() = (children?: ElementOrText) => tag('b', children);

// 2. Usage

div("display:flex", [
    div('my-class-name'), 
    p(
        b('This is an example')
    )
]);

```

