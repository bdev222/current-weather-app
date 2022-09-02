"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherbitApp_1 = require("./WeatherbitApp");
describe("WeatherbitApp", () => {
    it("should return correct config value", () => {
        process.env.REACT_APP_API_KEY = "abc";
        const config = (0, WeatherbitApp_1.initRequestHeader)({
            baseURL: "",
            params: {
                key: "",
            },
        });
        expect(config.baseURL).toEqual("https://api.weatherbit.io/v2.0");
        expect(config.params.key).toEqual("abc");
    });
});
