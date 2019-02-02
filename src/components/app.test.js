import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { App } from './app';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
  it('Renders routes and h1', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Route).length).toBe(7);
    expect(wrapper.find('h1').length).toBe(1);
  });
});