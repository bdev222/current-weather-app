/// <reference types="react" />
import { IStore } from "../common/interfaces/IStore";
export declare const renderWithStore: (component: JSX.Element, state?: IStore) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
