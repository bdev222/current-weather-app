"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const _1 = __importDefault(require("."));
describe("<Meta>", () => {
    let renderResult;
    const props = {
        title: "HUMIDITY",
        value: 12,
    };
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        renderResult = (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.default, Object.assign({}, props)));
    });
    it("should render day", () => {
        const { getByText } = renderResult;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(props.title)).not.toBeNull();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(props.value)).not.toBeNull();
    });
});
