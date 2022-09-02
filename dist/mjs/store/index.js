import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import themeReducer from "./slices/theme.slice";
import currentReducer from "./slices/current.slice";
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        current: currentReducer,
    },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
