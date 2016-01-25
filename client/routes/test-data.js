import React from 'react';
import { createClass } from 'react-stateless';
import {connect} from 'react-redux';
import {fetchData} from '../actions/test-data-actions';

const componentDidMount = (props, nextProps) => {
    props.getTestData();
};

const render = ({data}) => {
    return <div>
       this is test data page and data is {data}
    </div>
};

const component = createClass({componentDidMount, render});

const mapStateToProps = (state) => {
    return {
        data:state.app.test
    }
};

const mapActions = (dispatch) => {
    return {
        getTestData(){
            dispatch(fetchData());
        }
    }
};

export default connect(mapStateToProps, mapActions)(component);
