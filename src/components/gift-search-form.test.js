import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { GiftSearchForm } from './gift-search-form';

describe('<GiftSearchForm />', () => {
	it('Renders without crashing', () => {
		shallow(
			<MemoryRouter>
				<GiftSearchForm />
			</MemoryRouter>
		);
	})
});
