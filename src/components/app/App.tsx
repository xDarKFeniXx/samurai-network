import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "../../utils/theme";
import {AppWithRouterStoreTheme} from "./app-with-router-store-theme";

const App = () => {

    return (
        <>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Provider store={store}>
                        <AppWithRouterStoreTheme />
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App;
