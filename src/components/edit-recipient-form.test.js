import React from 'react';
import { shallow } from 'enzyme';
import { EditRecipientForm } from './edit-recipient-form';

describe('<EditRecipientForm />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<EditRecipientForm />);
    expect(wrapper.exists()).toBe(true);
  });
});
