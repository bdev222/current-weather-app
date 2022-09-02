import { IThemeState } from "../../common/interfaces/IThemeState";
export declare const themeSlice: import("@reduxjs/toolkit").Slice<IThemeState, {
    toggleTheme: (state: IThemeState) => void;
}, "theme">;
export declare const toggleTheme: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<IThemeState, import("redux").AnyAction>;
export default _default;
