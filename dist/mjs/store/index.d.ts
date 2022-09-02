import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    theme: import("../common/interfaces/IThemeState").IThemeState;
    current: import("../common/interfaces/ICurrentState").ICurrentState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    theme: import("../common/interfaces/IThemeState").IThemeState;
    current: import("../common/interfaces/ICurrentState").ICurrentState;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    theme: import("../common/interfaces/IThemeState").IThemeState;
    current: import("../common/interfaces/ICurrentState").ICurrentState;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
