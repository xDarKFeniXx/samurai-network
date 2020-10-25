import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})
//@ts-ignore
// if (process.env.NODE_ENV === 'development' && module.hot) {
//
//     // @ts-ignore
//     module.hot.accept('./root-reducer', () => {
//         const newRootReducer = require('./root-reducer').default
//         store.replaceReducer(newRootReducer)
//     })
// }
sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
