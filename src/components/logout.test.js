import React from 'react';
import { shallow } from 'enzyme';
import { Logout } from './logout';

describe('<EditRecipientForm />', () => {
	it('Renders without crashing', () => {
		const wrapper = shallow(<Logout />);
		expect(wrapper.exists()).toBe(true);
	});
});
