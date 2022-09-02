import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import "./Meta.scss";
const Meta = ({ title, value }) => (_jsxs("div", { className: "Meta", tabIndex: 0, "aria-label": `${title} is ${value}`, children: [_jsx("span", { className: "Meta__Title", children: title }), _jsx("br", {}), _jsx("span", { className: "Meta__Value", children: value })] }));
export default memo(Meta);
