"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const theme_slice_1 = __importDefault(require("./slices/theme.slice"));
const current_slice_1 = __importDefault(require("./slices/current.slice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        theme: theme_slice_1.default,
        current: current_slice_1.default,
    },
});
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
