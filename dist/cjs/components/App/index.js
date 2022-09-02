"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.scss");
const Current_1 = __importDefault(require("../Current"));
const App = () => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App__WeatherWrapper" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App__WeatherCurrent" }, { children: (0, jsx_runtime_1.jsx)(Current_1.default, {}) })) })) })));
exports.default = App;
