import {combineReducers} from "redux";
import { authSlice } from "./auth/auth-reducer";

export const rootReducer=combineReducers({
    auth: authSlice.reducer
})
export type RootReducerState = ReturnType<typeof rootReducer>
