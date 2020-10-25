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


export const getUserDataAction=createAction(GET_USER_DATA)

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
                }
        }
})
export const {setUserDataAction, setLoadedUserAction, setLoadingUserAction}=authSlice.actions
