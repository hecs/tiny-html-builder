import { header } from './example-header';
import { tag, event } from './lib/tag'

// Tag shorthands
const div = (...args) => tag('div', ...args);
const footer = children => tag("footer", null, children);
const h1 = text => tag("h1", null, text);
const button = text => tag('button', null, text);

// Event shorthands
const click = (callback, children) => event('click', callback, children);
const mouseover = (callback, children) => event('mouseover', callback, children);

// App code
const app = div("x-app-root", [
  header(),
  div("display: flex; flex-direction: column;", [
    h1("This is my heading"),
    ...mouseover(
      console.info,
      button('my button')
    ),
    ...click(
      console.log,
      [
        "Text here is not affected by click",
        div(null, 0),
        button('my button')
      ]
    )
  ]),
  footer('FooteR')
]);

// Append it
document.body.append(app);
