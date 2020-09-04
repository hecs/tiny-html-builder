import { tag, event } from './index'

// Tag shorthands
const div = (...args) => tag('div', ...args);
const header = children => tag("header", null, children);
const footer = children => tag("footer", null, children);
const h1 = text => tag("h1", null, text);
const button = text => tag('button', null, text);

// Event shorthands
const click = (callback, children) => event('click', callback, children)

// App code
const app = div("x-app-root", [
  header('HeadeR'),
  div("display: flex", [
    h1("This is my heading"),
    ...click(
      console.info,
      button('my button')
    ),
    ...click(
      console.log,
      [
        button('my button'),
        "Text here is not affected by click"
      ]
    )
  ]),
  footer('FooteR')
]);

// Append it
document.body.append(app);
