import React from 'react';
import { shallow } from 'enzyme';
import { DeleteRecipient } from './delete-recipient';
import { MemoryRouter } from 'react-router-dom';

describe('<DeleteRecipient />', () => {
	it('Renders without crashing', () => {
		shallow(
			<MemoryRouter>
				<DeleteRecipient />
			</MemoryRouter>
		);
	});
});
