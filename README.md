# tiny-html-builder

Tiny helper for creating html elements, written in typescript.

It's
- Fast
- Extremely small. Under 200 bytes minified (without gzip)

__Usage__
```typescript

// 1. Create shorthand-functions for the tags that you want to use, and forward the arguments that is relevant the tag in question
import { tag, ElementsOrText } from 'tiny-html-builder';

const div = (style: string, children?: ElementsOrText) => tag('div', style, children);
const p = (children?: ElementsOrText) => tag('p', undefined, children);
const b = (text: string) => tag('b', undefined, text);

// 2. Use your shorthand functions

const fragment = div("display:flex", [
    div('my-class-name'), 
    p(
        b('This is an example')
    )
]);

// Returns: A html fragment
```

__Limitations__
This is not in any way a replacement for react/angular/vue etc. It does not have support for data binding, event binding etc. That you'll need to solve separately.