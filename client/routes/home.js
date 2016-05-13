import React from 'react';
import {connect} from 'react-redux';

class component extends React.Component {
    render() {
        return <div>
            {this.props.message}
        </div>
    }
}

const mapToProps = (state) => {
    return {
        message: state.app.home
    }
};

export default connect(mapToProps)(component);
