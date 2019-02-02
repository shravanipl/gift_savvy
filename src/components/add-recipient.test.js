import React from 'react';
import { shallow } from 'enzyme';
import { AddRecipient } from './add-recipient';
import { AddRecipientForm } from './add-recipient-form';
import { MemoryRouter } from 'react-router-dom';

describe('<AddExpense />', () => {
	it('Renders without crashing', () => {
		shallow(
			<MemoryRouter>
        <AddRecipient />
			</MemoryRouter>
		);
	});
	it('Renders AddExpenseForm components', () => {
    const wrapper = shallow(<AddRecipient />);
		expect(wrapper.find(AddRecipientForm).length).toBe(1);
	});
});
