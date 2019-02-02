import React from 'react';
import { shallow } from 'enzyme';
import { DeleteRecipientForm } from './delete-recipient-form';

describe('<DeleteRecipientForm />', () => {
	it('Renders without crashing', () => {
		const wrapper = shallow(<DeleteRecipientForm />);
		expect(wrapper.exists()).toBe(true);
	});
});
