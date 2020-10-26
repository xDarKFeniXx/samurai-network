import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from "react-redux";
import {currentUserSelector} from "./store/auth/auth-selectors";
import {ProfilePage} from "./pages/profile-page/profile-page";
import {UsersPage} from "./pages/users-page/users-page";
import {NotFoundPage} from "./pages/not-found-page/not-found-page";
import {IntroPage} from "./pages/intro-page/intro-page";
import {LoginPage} from "./pages/login-page/login-page";
import {RegistrationPage} from "./pages/registration-page/registration-page";
import {NavBar} from "./components/nav-bar/nav-bar";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {StickyFooter} from "./components/footer/footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {},
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export type ClassesMainLayoutType = typeof useStyles

export const useRoutes = () => {
    const classes = useStyles();
    const currentUser = useSelector(currentUserSelector)
    const contentRoutes = currentUser.isAuth
        ? <Switch>
            <Route exact path='/'>
                <Redirect to='/profile'/>
            </Route>
            <Route path='/profile'>
                <ProfilePage/>
            </Route>
            <Route path='/users/:id?'>
                <UsersPage/>
            </Route>
            <Route path='*'>
                <NotFoundPage/>
            </Route>
        </Switch>
        : <Switch>
            <Route exact path='/'>
                <IntroPage/>
            </Route>
            <Route path='/login'>
                <LoginPage/>
            </Route>
            <Route path='/registration'>
                <RegistrationPage/>
            </Route>
            <Route path='*'>
                <Redirect to='/'/>
            </Route>
        </Switch>


    return (

        <div className={classes.root}>
            <header className={classes.header}>
                {currentUser.isAuth&&<NavBar/>}
            </header>

            <Container component="main" className={classes.main} maxWidth="lg">
                {contentRoutes}
            </Container>


            <footer className={classes.footer}>
                <StickyFooter/>
            </footer>
        </div>

    )


}
