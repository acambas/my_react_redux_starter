import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import HomePage from './home';
import Layout from './layout';
import TestData from './test-data';


export default (
    <Route path='/' component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='test' component={TestData} />
    </Route>
)
