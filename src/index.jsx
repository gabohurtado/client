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

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="App">
                <header className="App-header">
                    <NavbarComponent/>
                    {routes}
                </header>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
