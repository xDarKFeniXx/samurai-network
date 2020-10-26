import {RootState} from "../index";


export const usersSelector=(state:RootState)=>state.users.users
export const isFetchingSelector=(state:RootState)=>state.users.isFetching
export const usersStateSelector=(state:RootState)=>state.users
