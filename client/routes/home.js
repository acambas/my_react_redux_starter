import React from 'react';
import { createClass } from 'react-stateless';
import {connect} from 'react-redux';

const render = ({message}) => {
    return <div>
        {message}
    </div>
};

const component = createClass({render});

const mapToProps = (state) => {
    return {
        message:state.app.home
    }
};

export default connect(mapToProps)(component);
