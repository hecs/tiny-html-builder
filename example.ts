import { header } from './example-header';
import { event, div, h1, button, footer } from './lib/tag'

// Event shorthands
const click = (callback, children) => event('click', callback, children);
const mouseover = (callback, children) => event('mouseover', callback, children);

// App code
const app = div("x-app-root", [
  header(),
  div("display: flex; flex-direction: column;", [
    h1({},"This is my heading"),
    mouseover(
      console.info,
      button({},'my mouseover-button')
    ),
    click(
      console.log,
      [
        "Text here is not affected by click",
        div(null, 0),
        button({},'my click-button')
      ]
    )
  ]),
  footer({}, 'FooteR')
]);

// Append it
document.body.append(app);
