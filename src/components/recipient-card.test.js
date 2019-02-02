import React from 'react';
import { shallow } from 'enzyme';
import RecipientCard from './recipient-card';

describe('<RecipientCard />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
      <RecipientCard key={1} link={`/edit-expense`} {...dispatch} />
		);
		expect(wrapper.exists()).toBe(true);
	});
});
