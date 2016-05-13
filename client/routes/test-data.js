import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/test-data-actions';


class component extends React.Component {
    constructor() {
        super();
    }
    render() {
        const data = this.props.data;
        return <div>
             this is test data page and data is {data ? new Date(data).toString() : "no data"}
        </div>
    }
    componentDidMount() {
        this.props.getTestData();
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.app.test
    }
};

const mapActions = (dispatch) => {
    return {
        getTestData() {
            dispatch(fetchData());
        }
    }
};

export default connect(mapStateToProps, mapActions)(component);
