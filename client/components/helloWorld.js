import React from 'react';


const component = React.createClass({
    render: function(){
        return <div className={'hello-world fa fa-camera-retro fa-lg'}>
            {this.props.message}
    </div>
    }
});



export default component
