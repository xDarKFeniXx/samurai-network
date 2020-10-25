import {createAction, createReducer, createSlice} from "@reduxjs/toolkit"

const initialState={

        userId: null as number | null,
        email: null as string | null,
        login: null as string | null,
        isAuth: false,
        captchaUrl: null as string | null
}
export type AuthReducerT=typeof initialState

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_USER_DATA = 'auth/GET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const setUserDataAction=createAction<AuthReducerT>(SET_USER_DATA)
export const getUserDataAction=createAction(GET_USER_DATA)

export const authSlice = createSlice({
        name: 'authReducer',
        initialState:initialState,
        reducers:{
                setUserDataAction(state, action){
                        return({...state, ...action.payload})
                }
        }
})
