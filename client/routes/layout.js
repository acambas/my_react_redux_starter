import React from 'react';
import DevTools from '../containers/DevTools.js';


const devToolsRender = () => {
    if (process.env.NODE_ENV !== 'production') {
        return <DevTools />
    }
}

export default (props) => {
    return (
        <div>
            {devToolsRender() }
            <div className='container'>
                {props.children}
            </div>
        </div>
    )
}