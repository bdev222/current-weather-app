"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Current.scss");
const Meta_1 = __importDefault(require("./Meta"));
const VerticalDivider_1 = __importDefault(require("./VerticalDivider"));
const store_1 = require("../../store");
const hooks_1 = require("../hooks");
const date_fns_1 = require("date-fns");
const Toggler_1 = __importDefault(require("./Toggler"));
const Current = () => {
    const { searchCity, handleSearchChange } = (0, hooks_1.useHandleSearchChange)();
    const currentState = (0, store_1.useAppSelector)((state) => state.current);
    const themeState = (0, store_1.useAppSelector)((state) => state.theme);
    const onToggle = (0, hooks_1.useHandleToggle)();
    const { data, loading } = currentState;
    const date = (0, react_1.useMemo)(() => (0, date_fns_1.format)(new Date(), "EEEE, MMMM do, yyyy"), []);
    const srCountryCode = (0, react_1.useMemo)(() => data === null || data === void 0 ? void 0 : data.country_code.split("").join(" "), [data === null || data === void 0 ? void 0 : data.country_code]);
    const themeProp = (0, react_1.useMemo)(() => {
        if (themeState.theme === "dark") {
            return {
                backgroundColor: "#495057",
                color: "white",
            };
        }
        else {
            return {
                backgroundColor: "#007bff40",
                color: "#333",
            };
        }
    }, [themeState]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current", style: Object.assign({}, themeProp) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Current__Search" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "searchCity", "data-testid": "searchCity", value: searchCity, onChange: handleSearchChange, placeholder: "Search... Ex: Belgrade, RS" }), (0, jsx_runtime_1.jsx)(Toggler_1.default, { onToggle: onToggle })] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current__Content" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current__Content--left" }, { children: [loading ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Current__Loading" }, { children: "Loading ..." }))) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current__CurrentTemperature", tabIndex: 0, "aria-label": `
                temperature in ${data === null || data === void 0 ? void 0 : data.city_name} ${srCountryCode}, now is ${data === null || data === void 0 ? void 0 : data.app_temp} degree,
                weather is ${data === null || data === void 0 ? void 0 : data.weather.description}
              ` }, { children: [(0, jsx_runtime_1.jsx)("span", { children: data ? data.app_temp : "00.0" }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0" }), (0, jsx_runtime_1.jsx)("span", { children: "\u00B0" })] }))), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Current__WeatherDesc" }, { children: data ? data.weather.description : "" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current__Metas" }, { children: [(0, jsx_runtime_1.jsx)(Meta_1.default, { title: "HUMIDITY", value: `${data ? data.rh : 0}%` }), (0, jsx_runtime_1.jsx)(VerticalDivider_1.default, { width: "2px", color: "rgba(255, 255, 255, 0.7)" }), (0, jsx_runtime_1.jsx)(Meta_1.default, { title: "WIND", value: `${data ? data.wind_spd : 0} m/s` })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Current__Content--right", tabIndex: 0, "aria-label": `
            current city is ${data === null || data === void 0 ? void 0 : data.city_name}, ${srCountryCode}, current date is ${date}
          ` }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "Current__City" }, { children: data
                                    ? `${data.city_name}, ${data.country_code}`
                                    : "Data Not Available" })), (0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "Current__Date" }, { children: date }))] }))] }))] })));
};
exports.default = Current;
