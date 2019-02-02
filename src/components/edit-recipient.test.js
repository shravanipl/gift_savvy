import React from 'react';
import { shallow } from 'enzyme';

import EditRecipient from './edit-recipient';

describe('<EditRecipient/>', () => {
  it('should render EditRecipient', () => {
    shallow(<EditRecipient />);
   })
});