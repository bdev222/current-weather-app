"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Toggler.scss");
const Toggler = ({ onToggle }) => {
    return ((0, jsx_runtime_1.jsxs)("label", Object.assign({ className: "switch" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "theme-toggle", "data-testid": "toggler", onChange: onToggle }), (0, jsx_runtime_1.jsx)("span", { className: "slider round" })] })));
};
exports.default = Toggler;
