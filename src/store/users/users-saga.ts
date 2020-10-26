import {call, put, takeLatest } from "redux-saga/effects"
import {GET_USERS, setCurrentPageAction, setTotalUsersCountAction, setUsersAction, toggleIsFetchingAction } from "./users-reducer"
import {showError} from "../app/app-reducer";
import {usersAPI} from "../../api/users-api";


function* requestUsers(page: number,pageSize: number){

    yield put(toggleIsFetchingAction(true))
    yield put(setCurrentPageAction(page))
    try{
        const data=yield call(usersAPI.getUsers, page, pageSize)

            yield put(setTotalUsersCountAction(data.totalCount))
            yield put(setUsersAction(data.items))
            yield put(toggleIsFetchingAction(false))

    }catch (e) {
        yield put(showError(e))
    }
}


export function* usersSaga(){
    // @ts-ignore
    yield takeLatest(GET_USERS, requestUsers)
}
