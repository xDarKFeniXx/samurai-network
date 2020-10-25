import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initializeAppSuccess} from '../store/app/app-reducer';
import {initializeSelector} from "../store/app/app-selectors";
import {getUserDataAction} from "../store/auth/auth-reducer";

export const useInitializeHook = () => {
    const initialize = useSelector(initializeSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!initialize) {
            dispatch(getUserDataAction())
            dispatch(initializeAppSuccess())
        }
    }, [initialize])

};


