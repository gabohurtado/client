import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'

import history from './history';

// Redux
import { Provider } from 'react-redux';
import store from './store/store'

import './index.scss';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import NavbarComponent from './components/navbar/navbar.component';

// Internationalization
import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';
import * as en from "react-intl/locale-data/en";
import * as es from "react-intl/locale-data/es";
import languages from './i18n/languages'

addLocaleData(es);
addLocaleData(en);

ReactDOM.render(
    <IntlProvider locale="es" messages={languages['es']}>
        <Provider store={store}>
            <Router history={history}>
                <div className="App">
                    <header className="App-header">
                        <NavbarComponent />
                    </header>
                    <div className="container col-md-10">
                        {routes}
                    </div>
                </div>
            </Router>
        </Provider>
    </IntlProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
