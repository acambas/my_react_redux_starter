import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '../styles/app.scss';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import appReducer from './reducers/mainReducer';
import routes from './routes/routes';



//set up reducer
const reducer = combineReducers(Object.assign({}, {app:appReducer}, {
    routing: routeReducer
}));


//set up middleware
const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware,thunk,loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app'));