import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { fetchCurrentWeather } from "../../store/slices/current.slice";
import { toggleTheme } from "../../store/slices/theme.slice";
export const useHandleSearchChange = () => {
    const [searchCity, setSearchCity] = useState("Belgrade, RS");
    const dispatch = useAppDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const search = useCallback(debounce((serachText) => {
        let searchCity = serachText ? serachText : "Belgrade, RS";
        search(searchCity);
    }, 1000), []);
    const handleSearchChange = (event) => {
        const searchCity = event.currentTarget.value;
        setSearchCity(searchCity);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(fetchCurrentWeather(searchCity));
        }, 120000);
        dispatch(fetchCurrentWeather(searchCity));
        return () => {
            clearInterval(interval);
        };
    }, [dispatch, searchCity]);
    return { searchCity, handleSearchChange };
};
export const useHandleToggle = () => {
    const dispatch = useAppDispatch();
    const onToggle = () => dispatch(toggleTheme());
    return onToggle;
};
