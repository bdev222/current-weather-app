import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import "./Current.scss";
import Meta from "./Meta";
import VerticalDivider from "./VerticalDivider";
import { useAppSelector } from "../../store";
import { useHandleSearchChange, useHandleToggle } from "../hooks";
import { format } from "date-fns";
import Toggler from "./Toggler";
const Current = () => {
    const { searchCity, handleSearchChange } = useHandleSearchChange();
    const currentState = useAppSelector((state) => state.current);
    const themeState = useAppSelector((state) => state.theme);
    const onToggle = useHandleToggle();
    const { data, loading } = currentState;
    const date = useMemo(() => format(new Date(), "EEEE, MMMM do, yyyy"), []);
    const srCountryCode = useMemo(() => data?.country_code.split("").join(" "), [data?.country_code]);
    const themeProp = useMemo(() => {
        if (themeState.theme === "dark") {
            return {
                backgroundColor: "#495057",
                color: "white",
            };
        }
        else {
            return {
                backgroundColor: "#007bff40",
                color: "#333",
            };
        }
    }, [themeState]);
    return (_jsxs("div", { className: "Current", style: { ...themeProp }, children: [_jsx("div", { className: "Current__Search", children: _jsxs("div", { className: "form-group", children: [_jsx("input", { type: "text", className: "form-control", id: "searchCity", "data-testid": "searchCity", value: searchCity, onChange: handleSearchChange, placeholder: "Search... Ex: Belgrade, RS" }), _jsx(Toggler, { onToggle: onToggle })] }) }), _jsxs("div", { className: "Current__Content", children: [_jsxs("div", { className: "Current__Content--left", children: [loading ? (_jsx("div", { className: "Current__Loading", children: "Loading ..." })) : (_jsxs("div", { className: "Current__CurrentTemperature", tabIndex: 0, "aria-label": `
                temperature in ${data?.city_name} ${srCountryCode}, now is ${data?.app_temp} degree,
                weather is ${data?.weather.description}
              `, children: [_jsx("span", { children: data ? data.app_temp : "00.0" }), _jsx("span", { children: "\u00A0" }), _jsx("span", { children: "\u00B0" })] })), _jsx("div", { className: "Current__WeatherDesc", children: data ? data.weather.description : "" }), _jsxs("div", { className: "Current__Metas", children: [_jsx(Meta, { title: "HUMIDITY", value: `${data ? data.rh : 0}%` }), _jsx(VerticalDivider, { width: "2px", color: "rgba(255, 255, 255, 0.7)" }), _jsx(Meta, { title: "WIND", value: `${data ? data.wind_spd : 0} m/s` })] })] }), _jsxs("div", { className: "Current__Content--right", tabIndex: 0, "aria-label": `
            current city is ${data?.city_name}, ${srCountryCode}, current date is ${date}
          `, children: [_jsx("h1", { className: "Current__City", children: data
                                    ? `${data.city_name}, ${data.country_code}`
                                    : "Data Not Available" }), _jsx("h1", { className: "Current__Date", children: date })] })] })] }));
};
export default Current;
