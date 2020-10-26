import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }

}))
export const ProfilePage:React.FC = () => {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            profilePage
        </div>
    );
};

