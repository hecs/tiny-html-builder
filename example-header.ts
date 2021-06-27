import { div, tag } from "./lib/tag";

const flexbox = (children) => div("display: flex;", children);
const flexboxChild = (style?, children?) => div(style, children);

export const header = () => tag("header", "height: 100px;", [
    flexbox([
        flexboxChild("margin-right: 25px", "Logotype"),
        flexboxChild(null, [
            div(null, "HeadeR - MyCompany")
        ]),
    ])
]);
