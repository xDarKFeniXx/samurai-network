import {call, put, takeLeading } from 'redux-saga/effects'
import {AuthUserI, GET_USER_DATA, setLoadedUserAction, setLoadingUserAction, setUserDataAction} from './auth-reducer';
import {authAPI} from "../../api/auth-api";
import {ResultCodesEnum} from "../../api/api";
import {addNotification, NotificationTypeEnum, showError} from '../app/app-reducer';


function* getUserData() {
    yield put(setLoadingUserAction())
    try{
        const data = yield call(authAPI.me);

        if(data.resultCode===ResultCodesEnum.Success){
            const {id, email, login}=data.data
            const user:AuthUserI={userId:id, email,login, captchaUrl:null, isAuth:true }
            yield put(setUserDataAction(user));
            yield put(addNotification({message: "Вы успешно вошли", type :NotificationTypeEnum.SUCCESS}))
        }
        if(data.resultCode===ResultCodesEnum.Error){
            yield put(setUserDataAction({userId:null, email:null, captchaUrl:null, isAuth:false, login:null}));
        }
    }catch (e) {
        yield put(showError(e))
    }
    yield put(setLoadedUserAction())
}

export function* authSaga() {
    yield takeLeading(GET_USER_DATA, getUserData)

}


