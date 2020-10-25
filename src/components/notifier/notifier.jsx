import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {notificationsSelector} from "../../store/app/app-selectors";
import { closeNotification } from '../../store/app/app-reducer';



const Notifier = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(notificationsSelector);

    const { enqueueSnackbar} = useSnackbar();



    React.useEffect(() => {
        // @ts-ignore
        notifications.forEach(({ key, message, type }) => {

            enqueueSnackbar(message, {
                key,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',

                },
                variant: type,
                onExited: (event, myKey) => {
                    // remove this snackbar from redux store
                    dispatch(closeNotification(myKey));
                },
            });


        });
    }, [notifications, enqueueSnackbar, dispatch]);

    return null;
};

export default Notifier;
