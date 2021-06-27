# README: tiny-html-builder

Tiny helper for creating html fragments with event binding, written in typescript.

It's...

-   Fast
-   Simple
-   Extremely small

**Usage**

```typescript
import { div, p, b, event } from "tiny-html-builder";

const click = (callback, children) => event('click', callback, children);

const fragment = div("display:flex", [
    div("my-class-name"),
    p({}, 
        click(event => console.log,
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

-   This is not in any way a replacement for react/angular/vue etc. It does not support a way of automatically updating the dom when data is changed.
-   There's no dom-diff built in. This might be added in the future. 
