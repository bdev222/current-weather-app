"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTheme = exports.themeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    theme: "dark",
};
exports.themeSlice = (0, toolkit_1.createSlice)({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
    },
});
exports.toggleTheme = exports.themeSlice.actions.toggleTheme;
exports.default = exports.themeSlice.reducer;
