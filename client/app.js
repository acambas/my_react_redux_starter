import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '../styles/app.scss';
import React from 'react';
import {render} from 'react-dom';
import { Router  } from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes/routes';
import mainStore from './redux/storeSetup.js';
const storeAndHistory = mainStore()

render(
    <Provider store={storeAndHistory.store}>
        <Router history={storeAndHistory.history}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app'));