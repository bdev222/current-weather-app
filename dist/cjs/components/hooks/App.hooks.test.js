"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const _1 = require(".");
const currentSlice = __importStar(require("../../store/slices/current.slice"));
const themeSlice = __importStar(require("../../store/slices/theme.slice"));
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));
describe("App hooks", () => {
    const mockfetchCurrent = jest.spyOn(currentSlice, "fetchCurrentWeather");
    const mockToggleTheme = jest.spyOn(themeSlice, "toggleTheme");
    it("should fire useEffect", () => {
        (0, react_hooks_1.renderHook)(() => (0, _1.useHandleSearchChange)());
        expect(mockDispatch).toBeCalledTimes(1);
        expect(mockfetchCurrent).toBeCalledWith("Belgrade, RS");
    });
    it("should fire call with new city string", () => __awaiter(void 0, void 0, void 0, function* () {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, _1.useHandleSearchChange)());
        const mockEvent = { currentTarget: { value: "123" } };
        (0, react_hooks_1.act)(() => {
            result.current.handleSearchChange(mockEvent);
        });
        yield new Promise((r) => setTimeout(r, 1500));
        expect(mockDispatch).toBeCalledTimes(2);
        expect(mockfetchCurrent).toBeCalledWith("123");
    }));
    it("should fire call with empty city string", () => __awaiter(void 0, void 0, void 0, function* () {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, _1.useHandleSearchChange)());
        const mockEvent = { currentTarget: { value: "" } };
        (0, react_hooks_1.act)(() => {
            result.current.handleSearchChange(mockEvent);
        });
        yield new Promise((r) => setTimeout(r, 1500));
        expect(mockDispatch).toBeCalledTimes(1);
        expect(mockfetchCurrent).toBeCalledWith("Belgrade, RS");
    }));
    it("should fire toggle theme", () => __awaiter(void 0, void 0, void 0, function* () {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, _1.useHandleToggle)());
        (0, react_hooks_1.act)(() => {
            const onToggle = result.current;
            onToggle();
        });
        yield new Promise((r) => setTimeout(r, 1000));
        expect(mockToggleTheme).toBeCalled();
    }));
});
