import {RootState} from "../index";

export const initializeSelector=(state:RootState):boolean=>state.app.initialized

export const notificationsSelector=(state:RootState)=>state.app.notifications

export const errorSelector=(state:RootState)=>state.app.error

export const messageErrorSelector=(state:RootState)=>state.app.messageError
