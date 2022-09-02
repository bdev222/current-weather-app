"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRequestHeader = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../common/config/constants");
const WeatherbitApp = axios_1.default.create();
const initRequestHeader = (config) => {
    config.baseURL = constants_1.WHEATHER_BASE_URL;
    config.params.key = process.env.REACT_APP_API_KEY;
    return config;
};
exports.initRequestHeader = initRequestHeader;
WeatherbitApp.interceptors.request.use(exports.initRequestHeader);
exports.default = WeatherbitApp;
