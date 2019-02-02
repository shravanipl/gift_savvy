import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm } from './registration-form';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<RegistrationForm handleSubmit={ handleSubmit } />);
  });

  it('Renders the register-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={ handleSubmit } />);
  });

  it('Submits data when form submits', function () {
    const onSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={ onSubmit } />);
    const name = 'test';
    const email = 'demo';
    const user = 'testdemo';
    const pass = 'password';
    wrapper.find('Field[name="name"]').value = name;
    wrapper.find('Field[name="email"]').value = email;
    wrapper.find('Field[name="username"]').value = user;
    wrapper.find('Field[name="password"]').value = pass;
    wrapper.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});