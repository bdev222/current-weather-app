"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherbitApp_1 = __importDefault(require("../../services/WeatherbitApp"));
const current_1 = require("../../mocks/current");
const current_slice_1 = __importStar(require("./current.slice"));
const toolkit_1 = require("@reduxjs/toolkit");
jest.mock("../../services/WeatherbitApp.ts");
const mockedWeatherbitApp = WeatherbitApp_1.default;
describe("current weather slice", () => {
    const initialState = {
        loading: false,
        data: null,
        error: null,
    };
    const mockResponse = {
        data: {
            data: [current_1.mockCurrent],
        },
    };
    const mockStore = (0, toolkit_1.configureStore)({
        reducer: {
            current: current_slice_1.default,
        },
    });
    it("fetch current success", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedWeatherbitApp.get.mockResolvedValue(mockResponse);
        yield mockStore.dispatch((0, current_slice_1.fetchCurrentWeather)("Melbourne, AU"));
        expect(mockedWeatherbitApp.get).toBeCalledWith("/current", {
            params: { city: "Melbourne, AU" },
        });
        const state = mockStore.getState();
        expect(state.current).toEqual({
            data: current_1.mockCurrent,
            error: null,
            loading: false,
        });
    }));
    it("fetch current failed with 404", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedWeatherbitApp.get.mockResolvedValue({ data: [] });
        yield mockStore.dispatch((0, current_slice_1.fetchCurrentWeather)("Melbourne, AU"));
        expect(mockedWeatherbitApp.get).toBeCalledWith("/current", {
            params: { city: "Melbourne, AU" },
        });
        const state = mockStore.getState();
        expect(state.current).toEqual({
            data: null,
            error: {
                code: 404,
                message: "Weather data not found",
            },
            loading: false,
        });
    }));
    it("fetch current failed with other errors", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedWeatherbitApp.get.mockRejectedValue({
            response: {
                status: 500,
            },
            message: "unknown error",
        });
        yield mockStore.dispatch((0, current_slice_1.fetchCurrentWeather)("Melbourne, AU"));
        expect(mockedWeatherbitApp.get).toBeCalledWith("/current", {
            params: { city: "Melbourne, AU" },
        });
        const state = mockStore.getState();
        expect(state.current).toEqual({
            data: null,
            error: {
                code: 500,
                message: "unknown error",
            },
            loading: false,
        });
    }));
    it("set loading true when start fetching current", () => {
        const action = { type: current_slice_1.fetchCurrentWeather.pending.type };
        const state = (0, current_slice_1.default)(initialState, action);
        expect(state).toEqual({
            loading: true,
            data: null,
            error: null,
        });
    });
    it("set data when fetching current successfully", () => {
        const action = {
            type: current_slice_1.fetchCurrentWeather.fulfilled.type,
            payload: current_1.mockCurrent,
        };
        const state = (0, current_slice_1.default)(initialState, action);
        expect(state).toEqual({
            loading: false,
            data: current_1.mockCurrent,
            error: null,
        });
    });
    it("set known error when fetching current failed", () => {
        const action = {
            type: current_slice_1.fetchCurrentWeather.rejected.type,
            payload: {
                code: 404,
                message: "not found",
            },
        };
        const state = (0, current_slice_1.default)(initialState, action);
        expect(state).toEqual({
            loading: false,
            data: null,
            error: {
                code: 404,
                message: "not found",
            },
        });
    });
    it("set unknown error when fetching current failed", () => {
        const action = {
            type: current_slice_1.fetchCurrentWeather.rejected.type,
        };
        const state = (0, current_slice_1.default)(initialState, action);
        expect(state).toEqual({
            loading: false,
            data: null,
            error: {
                code: 500,
                message: "unknown error",
            },
        });
    });
});
