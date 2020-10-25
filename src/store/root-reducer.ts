import {combineReducers} from "redux";
import {appSlice} from "./app/app-reducer";
import {authSlice} from "./auth/auth-reducer";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    app: appSlice.reducer
})
export type RootReducerState = ReturnType<typeof rootReducer>
export default rootReducer
