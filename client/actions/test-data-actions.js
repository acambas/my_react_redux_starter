import axios from 'axios'


export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
    return (dispatch) => {
        axios.get('/api/test').then((response) => {
            dispatch({
                type : FETCH_DATA,
                data : response.data.value
            });
        });
    }
};