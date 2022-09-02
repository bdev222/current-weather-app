import axios from "axios";
import { WHEATHER_BASE_URL } from "../common/config/constants";
const WeatherbitApp = axios.create();
export const initRequestHeader = (config) => {
    config.baseURL = WHEATHER_BASE_URL;
    config.params.key = process.env.REACT_APP_API_KEY;
    return config;
};
WeatherbitApp.interceptors.request.use(initRequestHeader);
export default WeatherbitApp;
