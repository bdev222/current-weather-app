import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Toggler.scss";
const Toggler = ({ onToggle }) => {
    return (_jsxs("label", { className: "switch", children: [_jsx("input", { type: "checkbox", name: "theme-toggle", "data-testid": "toggler", onChange: onToggle }), _jsx("span", { className: "slider round" })] }));
};
export default Toggler;
