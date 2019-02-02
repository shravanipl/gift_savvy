import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import GiftSearchPage from './gift-search-page';

describe('GiftSearchPage', () => {
	it('Should render GiftSearchPage', () => {
		shallow(
			<MemoryRouter>
				<GiftSearchPage />
			</MemoryRouter>
		);
	});

	it('Should render Nav', () => {
		const wrapper = shallow(<GiftSearchPage />);
		expect(wrapper.find('#nav-large-menu').exists());
	});
});
