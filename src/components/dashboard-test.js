import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Nav from './nav';

describe('<Dashboard/>', () => {
  it('should render dashboard component',()=>{
      shallow(Dashboard)
  });

  it('should render Nav,Link', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(Nav).length).toBe(1);
    expect(wrapper.find(Link).length).toBe(1);
  })
});
