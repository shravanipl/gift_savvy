import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import { registerUser } from '../actions/users';
import { login } from '../actions/auth';

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { name, email, username, password } = values;
    const user = { name, email, username, password };
    return this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }
	render() {
		return (
			<form className="loginForm" onSubmit={ this.props.handleSubmit(values => this.onSubmit(values)) }>
				<label htmlFor="name">Name</label>
				<Field component="input" type="text" name="name" />
				<label htmlFor="email">Email</label>
				<Field component="input" type="email" name="email" />
				<label htmlFor="username">Username</label>
				<Field component="input" type="text" name="username" />
				<label htmlFor="password">Password</label>
				<Field component="input" type="password" name="password" />
				<button
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>Register
				</button>
			</form>
		);
	}
}



export default reduxForm({
  form: 'registrationForm',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registrationForm',Object.keys(errors)[0]))
})(RegistrationForm);