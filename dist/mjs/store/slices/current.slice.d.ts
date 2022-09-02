import { ICurrentState } from "../../common/interfaces/ICurrentState";
import ICurrentWeather from "../../common/interfaces/ICurrentWeather";
import IError from "../../common/interfaces/IError";
export declare const fetchCurrentWeather: import("@reduxjs/toolkit").AsyncThunk<ICurrentWeather, string, {
    rejectValue: IError;
}>;
export declare const currentSlice: import("@reduxjs/toolkit").Slice<ICurrentState, {}, "current">;
declare const _default: import("redux").Reducer<ICurrentState, import("redux").AnyAction>;
export default _default;
