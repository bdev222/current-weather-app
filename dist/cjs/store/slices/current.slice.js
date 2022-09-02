"use strict";
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
exports.currentSlice = exports.fetchCurrentWeather = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const WeatherbitApp_1 = __importDefault(require("../../services/WeatherbitApp"));
const initialState = {
    loading: false,
    data: null,
    error: null,
};
exports.fetchCurrentWeather = (0, toolkit_1.createAsyncThunk)("current/fetchByCity", (city, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield WeatherbitApp_1.default.get("/current", {
            params: { city },
        });
        const { data } = res;
        const { data: weatherList } = data;
        if (weatherList && weatherList.length > 0) {
            return weatherList[0];
        }
        else {
            return rejectWithValue({
                code: 404,
                message: "Weather data not found",
            });
        }
    }
    catch (error) {
        return rejectWithValue({
            code: error.response.status,
            message: error.message,
        });
    }
}));
exports.currentSlice = (0, toolkit_1.createSlice)({
    name: "current",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exports.fetchCurrentWeather.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(exports.fetchCurrentWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(exports.fetchCurrentWeather.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            if (action.payload) {
                state.error = action.payload;
            }
            else {
                state.error = { code: 500, message: "unknown error" };
            }
        });
    },
});
exports.default = exports.currentSlice.reducer;
