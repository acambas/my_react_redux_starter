import {FETCH_DATA} from '../actions/test-data-actions';

export default (state = null, action) => {
    switch (action.type){
        case FETCH_DATA:
            return action.data;
        default:
            return state;
    }
};
