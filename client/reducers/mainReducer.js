import {combineReducers} from 'redux';
import homeReducer from './home-reducer';
import testDataReducer from './test-reducer';

export default combineReducers({
    home: homeReducer,
    test : testDataReducer
});