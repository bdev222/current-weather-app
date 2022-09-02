import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { mockInitialStore } from "./store";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
const mockStore = configureStore();
export const renderWithStore = (component, state = mockInitialStore) => render(_jsx(Provider, { store: mockStore(state), children: component }));
