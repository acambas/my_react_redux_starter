import React from 'react';

class component extends React.Component {
    render(){
        return (<div>
            {this.props.message}
        </div>)
    }

}

component.propTypes = {
    message: React.PropTypes.string.isRequired
};


export default component
