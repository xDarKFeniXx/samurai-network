import React from 'react'
import {Route, Switch} from 'react-router-dom';

export const useRoutes=()=>{

    return(
        <Switch>
            <Route exact path='/'>
                <div>Main page</div>
            </Route>
            <Route path='/about'>
                <div>About page</div>
            </Route>
            <Route path='*'>
                <div>404 NOT FOUND</div>
            </Route>
        </Switch>
    )
}
