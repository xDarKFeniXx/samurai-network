
import {createSlice, Draft} from "@reduxjs/toolkit";



const initialState={
    initialized: false,
    error: false,
    messageError: null as null|string,
    notifications: [] as Array<NotificationI>
}
export type AppReducerStateT=typeof initialState
export interface NotificationI{
    key :number|string
    type:NotificationTypeEnum
    message:string
}
export enum NotificationTypeEnum{
    SUCCESS='success',
    ERROR='error',
    INFO='info',
    WARNING='warning'

}
export const appSlice=createSlice({
    name:"app",
    initialState:initialState,
    reducers:{
        initializeAppSuccess(state:Draft<AppReducerStateT>){
            console.log('initialize')
            state.initialized=true
        },
        showError(state, action){
            state.error=true
            state.messageError=action.payload
        },
        addNotification(state, action){
            const {message, type}=action.payload
            state.notifications.push({message, type, key:new Date().getTime() + Math.random()})
        },
        closeNotification(state:Draft<AppReducerStateT>, action){
            //@ts-ignore
            state.notifications=state.notifications.filter(not=>not.key!==action.payload)
        }
    }
})
export const {initializeAppSuccess, showError, closeNotification, addNotification}=appSlice.actions
