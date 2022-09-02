import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const VerticalDivider = ({ color, width, className }) => (_jsx("div", { className: className, style: {
        width,
        backgroundColor: color,
    } }));
export default memo(VerticalDivider);
