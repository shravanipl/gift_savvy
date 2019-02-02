import React from 'react';
import { shallow } from 'enzyme';
import GiftResult from './gift-result';

describe('<GiftResult', () => {
	it('should render GiftResult', () => {
		shallow(<GiftResult />);
	});

	it('should render h1,img and a elements', () => {
		 const dispatch = jest.fn();

		const wrapper = shallow(<GiftResult key={dispatch} />);
		expect(wrapper.find('h2').length).toBe(1);
		expect(wrapper.find('img').length).toBe(1);
		expect(wrapper.find('a').length).toBe(1);
	});
});
