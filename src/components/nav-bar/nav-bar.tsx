import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import {NavLink, useHistory} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';
import {logoutAction} from "../../store/auth/auth-reducer";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: '0 20px'
    },
    header: {
        minHeight: 40
    },
    navigation:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        '& .active':{
            color: 'red'
        }
    }

}))

export const NavBar = () => {
    const classes = useStyles()
    const dispatch=useDispatch()
    const history=useHistory()
    const handleLogout=()=>{
        dispatch(logoutAction())
        history.push('/')
    }
    return (

        <AppBar position="sticky" className={classes.root}>

            <div>Logo</div>
            <Container component="nav" className={classes.header} maxWidth="lg">
                <List className={classes.navigation}>
                    <ListItem
                        button
                        key="profile"
                        component={NavLink} to="/profile"
                    >
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Профиль" />
                    </ListItem>
                    <ListItem
                        button
                        key="dialogs"
                        component={NavLink} to="/dialogs"
                    >
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dialogs" />
                    </ListItem>
                    <ListItem
                        button
                        key="users"
                        component={NavLink} to="/users"
                    >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                </List>

            </Container>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<ExitToAppIcon />}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </AppBar>
    );
};

