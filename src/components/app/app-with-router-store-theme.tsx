import React from 'react';
import {useRoutes} from '../../routes';
import {useSelector} from "react-redux";
import {useInitializeHook} from "../../hooks/useInitializeHook";
import {errorSelector, initializeSelector, messageErrorSelector} from "../../store/app/app-selectors";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
import {SnackbarProvider} from "notistack";
import Notifier from "../notifier/notifier";
import Button from '@material-ui/core/Button';
import { ErrorPage } from '../../pages/error-page/error-page';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
export const AppWithRouterStoreTheme = () => {
    const classes = useStyles()
    useInitializeHook()
    const routes = useRoutes()
    const initialize = useSelector(initializeSelector)
    const error=useSelector(errorSelector)
    const messageError=useSelector(messageErrorSelector)
    const notistackRef = React.createRef();
    const onClickDismiss =( key:any) => () => {
        // @ts-ignore
        notistackRef.current.closeSnackbar(key);

    }
    if (!initialize) {
        return (
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    }
    if(error){
        return (
            <ErrorPage messageError={messageError}/>
        )
    }
    return (
        <>
            <SnackbarProvider
                // @ts-ignore
                ref={notistackRef}
                action={(key) => (
                    <Button onClick={onClickDismiss(key)}>
                        &times;
                    </Button>
                )}
            >
                <Notifier/>
                {routes}
            </SnackbarProvider>
        </>
    );
};

