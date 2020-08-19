# tiny-html-builder

Tiny helper for creating html elements, written in typescript.

It's
- Fast
- Extremely small. Under 200 bytes minified (without gzip)

__Example__
```typescript


// 1. Create shorthand-functions for the tags that you want to use, and forward the arguments that is relevant the tag in question

const div = (style: string, children?: ElementOrText) => tag('div', style, children);
const p = (style?: string, children?: ElementOrText) => tag('p', style, children);
const bold = (children?: ElementOrText) => tag('b', children);

// 2. Use your shorthand functions

div("display:flex", [
    div('my-class-name'), 
    p(
        b('This is an example')
    )
]);

// Returns: A html fragment

```

__Limitations__
This is not in any way a replacement for react/angular/vue etc. It does not have support for data binding, event binding etc. That you'll need to solve separately.