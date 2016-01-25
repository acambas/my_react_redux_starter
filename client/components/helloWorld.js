import React from 'react';
import { createClass } from 'react-stateless';


const componentDidMount = (props, nextProps) => {
    console.log('mounted');
};

const render = (props) => {
    return <div className={'hello-world fa fa-camera-retro fa-lg'}>
        {props.message}
    </div>
};

const propTypes = {
    message : React.PropTypes.string
};
const defaultProps = {
    message : 'default asd'
};
const component = createClass({componentDidMount, render, propTypes, defaultProps});


export default component
