# OLD README: tiny-html-builder 1.4 (README for 2.0 is in the works)

(examples are also for 1.4)

Tiny helper for creating html fragments with event binding, written in typescript.

It's...

-   Fast
-   Simple
-   Extremely small. Just over 300 bytes minified

**Usage**

```typescript
// 1. Create shorthand-functions for tag (and event) that you want to use, and forward the arguments that is relevant to your element
import { tag, event } from "tiny-html-builder";

const div = (style: string, children?: ElementsOrText) =>
    tag("div", style, children);
const p = (children?: ElementsOrText) => tag("p", null, children);
const b = (text: string) => tag("b", null, text);

const click = (callback, children) => event('click', callback, children);

// 2. Use your shorthand functions

const fragment = div("display:flex", [
    div("my-class-name"),
    p(
        ...click(event => console.log
            b("This is an example")
        )
    )
]);

// Returns: A html fragment

A more complete example can be found in example.ts
```

**Why**

Why not? Sometimes you just need a simple tool to do a simple job.

**Limitations**

-   This is not meant for production use.
-   This is not in any way a replacement for react/angular/vue etc. It does not have support for data binding etc. That you'll need to solve separately.
