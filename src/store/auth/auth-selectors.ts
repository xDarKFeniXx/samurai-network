import {RootState} from "../index";


export const authSelector=(state:RootState)=>state.auth
export const currentUserSelector=(state:RootState)=>state.auth.user
