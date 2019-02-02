import React from 'react';
import { shallow } from 'enzyme';
import { AddRecipientForm } from './add-recipient-form';

describe('<AddRecipientForm />', () => {
	it('Renders without crashing', () => {
		const wrapper = shallow(<AddRecipientForm />);
		expect(wrapper.exists()).toBe(true);
	});
});
