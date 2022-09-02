"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Meta.scss");
const Meta = ({ title, value }) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Meta", tabIndex: 0, "aria-label": `${title} is ${value}` }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "Meta__Title" }, { children: title })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "Meta__Value" }, { children: value }))] })));
exports.default = (0, react_1.memo)(Meta);
