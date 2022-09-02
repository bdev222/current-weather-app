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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = __importDefault(require("."));
const current_1 = require("../../mocks/current");
const renderWithStore_1 = require("../../mocks/renderWithStore");
const store_1 = require("../../mocks/store");
const hooks = __importStar(require("../hooks"));
describe("<Current>", () => {
    it("should call hooks", () => {
        const useHandleSearchChange = jest
            .spyOn(hooks, "useHandleSearchChange")
            .mockImplementation(() => ({
            searchCity: "Belgrade, RS",
            handleSearchChange: jest.fn(),
        }));
        (0, renderWithStore_1.renderWithStore)((0, jsx_runtime_1.jsx)(_1.default, {}));
        expect(useHandleSearchChange).toBeCalled();
    });
    it("should render correct value into input element", () => {
        jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
            searchCity: "Belgrade, RS",
            handleSearchChange: jest.fn(),
        }));
        const { getByTestId } = (0, renderWithStore_1.renderWithStore)((0, jsx_runtime_1.jsx)(_1.default, {}));
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const searchInput = getByTestId("searchCity");
        expect(searchInput.value).toEqual("Belgrade, RS");
    });
    it("should render loading text", () => {
        jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
            searchCity: "Belgrade, RS",
            handleSearchChange: jest.fn(),
        }));
        const { getByText } = (0, renderWithStore_1.renderWithStore)((0, jsx_runtime_1.jsx)(_1.default, {}), Object.assign(Object.assign({}, store_1.mockInitialStore), { current: {
                loading: true,
                data: null,
                error: null,
            } }));
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText("Loading ...")).not.toBeNull();
    });
    it("should render correct info", () => {
        jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
            searchCity: "Belgrade, RS",
            handleSearchChange: jest.fn(),
        }));
        const { getByText } = (0, renderWithStore_1.renderWithStore)((0, jsx_runtime_1.jsx)(_1.default, {}), Object.assign(Object.assign({}, store_1.mockInitialStore), { current: {
                loading: false,
                data: current_1.mockCurrent,
                error: null,
            } }));
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText("Broken clouds")).not.toBeNull();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText("Belgrade, RS")).not.toBeNull();
    });
    it("should render 00.0 when data is nil", () => {
        jest.spyOn(hooks, "useHandleSearchChange").mockImplementation(() => ({
            searchCity: "Belgrade, RS",
            handleSearchChange: jest.fn(),
        }));
        const { getByText } = (0, renderWithStore_1.renderWithStore)((0, jsx_runtime_1.jsx)(_1.default, {}), Object.assign(Object.assign({}, store_1.mockInitialStore), { current: {
                loading: false,
                data: null,
                error: null,
            } }));
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText("00.0")).not.toBeNull();
    });
});
