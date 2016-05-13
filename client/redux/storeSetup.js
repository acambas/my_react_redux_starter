import { syncHistoryWithStore, routerReducer  } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {  browserHistory  } from 'react-router';
import appReducer from '../reducers/mainReducer';
import DevTools from '../containers/DevTools';


export default function initStoreAndHistory() {
	//Handle reducers
	const reducer = combineReducers({
		routing: routerReducer,
		app: appReducer
	});


	//Handle middleware
	let middleware = null;
	let finalCreateStore = null;

	//Prod environment workflow setup
	if (process.env.NODE_ENV === 'production') {
		middleware = [thunk];
		finalCreateStore = compose(
			applyMiddleware(...middleware)
		)(createStore);
	}

	//Dev environment workflow setup
	if (process.env.NODE_ENV !== 'production') {
		const loggerMiddleware = createLogger({
			level: 'info',
			collapsed: true
		});

		middleware = [thunk, loggerMiddleware];

		finalCreateStore = compose(
			applyMiddleware(...middleware),
			DevTools.instrument()
		)(createStore);
	}

	const store = finalCreateStore(reducer, window.__initialState__);
	const history = syncHistoryWithStore(browserHistory, store);
	return {
		store,
		history
	}
}
