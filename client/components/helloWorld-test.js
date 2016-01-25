import { shallow } from 'enzyme';
import React from 'React';
import HelloWorld from './helloWorld'
const test = require('tape');

test('hello world component test', function (t) {
     const wrapper = shallow(<HelloWorld message='sasa'/>);
     t.ok(wrapper.html().includes('sasa'));
     t.end()
});