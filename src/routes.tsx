import React from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {currentUserSelector} from "./store/auth/auth-selectors";
import {ProfilePage} from "./pages/profile-page/profile-page";
import {UsersPage} from "./pages/users-page/users-page";
import {NotFoundPage} from "./pages/not-found-page/not-found-page";
import {IntroPage} from "./pages/intro-page/intro-page";
import {LoginPage} from "./pages/login-page/login-page";
import {RegistrationPage} from "./pages/registration-page/registration-page";
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';



export const useRoutes = () => {
    const currentUser = useSelector(currentUserSelector)


    if (currentUser.isAuth) {
        return (
            <>

                <AppBar
                    position="sticky"

                >
                    <Container maxWidth="lg">
                    <Link to="/"> Profile</Link>
                    <Link to="/users"> Users</Link>
                    </Container>
                </AppBar>
                <Switch>
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
            </>
        )
    }
    return (
        <Switch>
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
    )
}
