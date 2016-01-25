import React from 'react';

export default (props) => {
    return <div>
        <div className='container'>
            {props.children}
        </div>
    </div>
}