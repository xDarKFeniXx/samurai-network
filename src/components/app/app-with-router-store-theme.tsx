import React from 'react';
import {useRoutes} from '../../routes';

export const AppWithRouterStoreTheme = () => {
    const routes = useRoutes()

    return (
        <div>
            {routes}
        </div>
    );
};

