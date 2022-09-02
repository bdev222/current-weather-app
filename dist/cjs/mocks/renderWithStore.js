"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWithStore = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const redux_mock_store_1 = __importDefault(require("redux-mock-store"));
const react_1 = require("@testing-library/react");
const mockStore = (0, redux_mock_store_1.default)();
const renderWithStore = (component, state = store_1.mockInitialStore) => (0, react_1.render)((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: mockStore(state) }, { children: component })));
exports.renderWithStore = renderWithStore;
