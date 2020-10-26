import {all} from 'redux-saga/effects'
import { authSaga } from './auth/auth-saga'
import { usersSaga } from './users/users-saga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        usersSaga()
    ])
    // code after all-effect
}
