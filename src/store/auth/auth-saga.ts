import {call, put, takeLeading} from 'redux-saga/effects'
import {
    AuthUserI,
    GET_USER_DATA,
    LOGIN, LoginFormValuesType, LOGOUT,
    setLoadedUserAction,
    setLoadingUserAction,
    setUserDataAction
} from './auth-reducer';
import {authAPI} from "../../api/auth-api";
import {ResultCodeForCapcthaEnum, ResultCodesEnum} from "../../api/api";
import {addNotification, NotificationTypeEnum, showError} from '../app/app-reducer';
import {securityAPI} from "../../api/security-api";



function* getUserData() {
    yield put(setLoadingUserAction())
    try {
        const data = yield call(authAPI.me);

        if (data.resultCode === ResultCodesEnum.Success) {
            const {id, email, login} = data.data
            const user: AuthUserI = {userId: id, email, login, captchaUrl: null, isAuth: true}
            yield put(setUserDataAction(user));
            yield put(addNotification({message: "Вы успешно вошли", type: NotificationTypeEnum.SUCCESS}))
        }
        if (data.resultCode === ResultCodesEnum.Error) {
            yield put(setUserDataAction({userId: null, email: null, captchaUrl: null, isAuth: false, login: null}));
            yield put(addNotification({message: "Что то пошло не так", type: NotificationTypeEnum.WARNING}))
        }
    } catch (e) {
        yield put(showError(e))
    }
    yield put(setLoadedUserAction())
}
function* getCaptchaUrl(){
    const data=yield call(securityAPI.getCaptchaUrl)
    const captchaUrl = data.url
    // @ts-ignore
    yield put(setCaptchaUrl(captchaUrl))
}
function* loginUser(action: { payload: LoginFormValuesType }) {
    const {email, password, rememberMe, captcha} = action.payload
    yield put(setLoadingUserAction())
    try {
        const data = yield call(authAPI.login, email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesEnum.Success) {
            getUserData()
        }
        if (data.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired){
            getCaptchaUrl()
        }
    } catch (e) {
        yield put(showError(e))
    }
    yield put(setLoadedUserAction())
}
function* logoutUser(){
    yield put(setLoadingUserAction())
    try{
        const data=yield call(authAPI.logout)
        if (data.resultCode === ResultCodesEnum.Success) {
            yield put(setUserDataAction({userId: null, email: null, captchaUrl: null, isAuth: false, login: null}));
            yield put(addNotification({message: "Вы вышли из аккаунта", type: NotificationTypeEnum.WARNING}))
        }
    }catch (e) {
        yield put(showError(e))
    }
    yield put(setLoadedUserAction())
}
export function* authSaga() {
    yield takeLeading(GET_USER_DATA, getUserData)
    // @ts-ignore
    yield takeLeading(LOGIN, loginUser)
    yield takeLeading(LOGOUT, logoutUser)

}


