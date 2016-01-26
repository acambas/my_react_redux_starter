import { syncHistory, routeReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {  browserHistory  } from 'react-router';
import appReducer from '../reducers/mainReducer';
import DevTools from '../containers/DevTools';

//Handle reducers
const reducer = combineReducers({
    routing: routeReducer,
    app:appReducer
});


//Handle middleware
const reduxRouterMiddleware = syncHistory(browserHistory);
let middleware = null;
let finalCreateStore = null;

//Prod environment workflow setup
if(process.env.NODE_ENV === 'production'){
	middleware =  [reduxRouterMiddleware,thunk];
	finalCreateStore = compose(
	  applyMiddleware(...middleware)
	)(createStore);
}

//Dev environment workflow setup
if(process.env.NODE_ENV !== 'production'){
	const loggerMiddleware = createLogger({
	    level: 'info',
	    collapsed: true
	});

	middleware =  [reduxRouterMiddleware,thunk,loggerMiddleware];

	finalCreateStore = compose(
	  applyMiddleware(...middleware),
	  DevTools.instrument()
	)(createStore);
}




const store = finalCreateStore(reducer)

export default store;