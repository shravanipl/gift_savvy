import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationPage } from './registration-page';

describe('<RegistrationPage />', () => {
	it('Renders without crashing', () => {
    shallow(<RegistrationPage/>);
	});

	it('Renders the RegistrationForm', () => {
    const wrapper = shallow(<RegistrationPage/>);
		expect(wrapper.find('.loginForm').exists());
	});
});
