import { jsx as _jsx } from "react/jsx-runtime";
import "./App.scss";
import Current from "../Current";
const App = () => (_jsx("div", { className: "App", children: _jsx("div", { className: "App__WeatherWrapper", children: _jsx("div", { className: "App__WeatherCurrent", children: _jsx(Current, {}) }) }) }));
export default App;
