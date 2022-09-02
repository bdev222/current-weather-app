"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandleToggle = exports.useHandleSearchChange = void 0;
const lodash_1 = require("lodash");
const react_1 = require("react");
const store_1 = require("../../store");
const current_slice_1 = require("../../store/slices/current.slice");
const theme_slice_1 = require("../../store/slices/theme.slice");
const useHandleSearchChange = () => {
    const [searchCity, setSearchCity] = (0, react_1.useState)("Belgrade, RS");
    const dispatch = (0, store_1.useAppDispatch)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const search = (0, react_1.useCallback)((0, lodash_1.debounce)((serachText) => {
        let searchCity = serachText ? serachText : "Belgrade, RS";
        search(searchCity);
    }, 1000), []);
    const handleSearchChange = (event) => {
        const searchCity = event.currentTarget.value;
        setSearchCity(searchCity);
    };
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            dispatch((0, current_slice_1.fetchCurrentWeather)(searchCity));
        }, 120000);
        dispatch((0, current_slice_1.fetchCurrentWeather)(searchCity));
        return () => {
            clearInterval(interval);
        };
    }, [dispatch, searchCity]);
    return { searchCity, handleSearchChange };
};
exports.useHandleSearchChange = useHandleSearchChange;
const useHandleToggle = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const onToggle = () => dispatch((0, theme_slice_1.toggleTheme)());
    return onToggle;
};
exports.useHandleToggle = useHandleToggle;
