import {createAction, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit"

const initialUserState={

        userId: null as number | null,
        email: null as string | null,
        login: null as string | null,
        isAuth: false,
        captchaUrl: null as string | null
}

export interface AuthUserI{
        userId: number | null | undefined,
        email: string | null | undefined,
        login: string | null | undefined,
        isAuth?: boolean,
        captchaUrl?: string | null | undefined
}
export interface AuthReducerStateI{
        loading: boolean,
        user:AuthUserI
}
export const GET_USER_DATA = 'auth/GET_USER_DATA';
export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

export type LoginFormValuesType={
        captcha: string
        rememberMe: boolean
        password: string
        email: string
}

export const getUserDataAction=createAction(GET_USER_DATA)
export const loginAction=createAction<LoginFormValuesType>(LOGIN)
export const logoutAction=createAction(LOGOUT)
export const getCaptchaAction=createAction(GET_CAPTCHA_URL)

export const authSlice = createSlice({
        name: 'auth',
        initialState: {
                loading:false,
                user:initialUserState
        },
        reducers:{
                setLoadingUserAction(state){
                  state.loading=true
                },
                setLoadedUserAction(state){
                  state.loading=false
                },
                setUserDataAction(state:Draft<AuthReducerStateI>, action:PayloadAction<AuthUserI>){
                        state.user=action.payload
                },
                setCaptchaUrl(state:Draft<AuthReducerStateI>, action:PayloadAction<string>){
                        state.user.captchaUrl=action.payload
                }
        }
})
export const {setUserDataAction, setLoadedUserAction, setLoadingUserAction, setCaptchaUrl}=authSlice.actions
