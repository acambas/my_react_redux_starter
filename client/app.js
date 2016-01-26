import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '../styles/app.scss';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import {Provider} from 'react-redux';
import DevTools from './containers/DevTools.js';

import routes from './routes/routes';
import mainStore from './redux/storeSetup.js';

render(
    <Provider store={mainStore}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app'));