import {createAction, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids
}
export type UsersStateT = typeof initialState
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export const GET_USERS='users/GET_USERS'
export const getUsersAction=createAction<{page: number,pageSize: number}>(GET_USERS)

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUsersAction(state: Draft<UsersStateT>, action: PayloadAction<Array<UserType>>) {
            state.users = [...state.users, ...action.payload]
        },
        setCurrentPageAction(state: Draft<UsersStateT>, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        toggleIsFetchingAction(state:Draft<UsersStateT>, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setTotalUsersCountAction(state: Draft<UsersStateT>, action: PayloadAction<number>) {
            state.totalUsersCount = action.payload
        },
        followAction(state: Draft<UsersStateT>, action: PayloadAction<number>) {
            const index = state.users.findIndex(user => user.id === action.payload)
            state.users[index].followed = true
        },
        unFollowAction(state: Draft<UsersStateT>, action: PayloadAction<number>) {
            const index = state.users.findIndex(user => user.id === action.payload)
            state.users[index].followed = false
        }
    }
})
export const {followAction, setCurrentPageAction, setTotalUsersCountAction, setUsersAction, toggleIsFetchingAction, unFollowAction} = usersSlice.actions
