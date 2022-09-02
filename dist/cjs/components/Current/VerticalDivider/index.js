"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const VerticalDivider = ({ color, width, className }) => ((0, jsx_runtime_1.jsx)("div", { className: className, style: {
        width,
        backgroundColor: color,
    } }));
exports.default = (0, react_1.memo)(VerticalDivider);
