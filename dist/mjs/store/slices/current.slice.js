import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeatherbitApp from "../../services/WeatherbitApp";
const initialState = {
    loading: false,
    data: null,
    error: null,
};
export const fetchCurrentWeather = createAsyncThunk("current/fetchByCity", async (city, { rejectWithValue }) => {
    try {
        const res = await WeatherbitApp.get("/current", {
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
});
export const currentSlice = createSlice({
    name: "current",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
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
export default currentSlice.reducer;
