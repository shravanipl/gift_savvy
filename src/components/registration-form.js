import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './input';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { email, required, nonEmpty, length, isTrimmed } from '../validators';

const passwordLength = length({ min: 4, max: 72 });

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		const { name, email, username, password } = values;
		const user = { name, email, username, password };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form
				className="login-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="name">Name</label>
				<Field component={Input} type="text" name="name" />
				<label htmlFor="email">Email</label>
				<Field component={Input} type="text" name="email" validate={email} />
				<label htmlFor="username">Username</label>
				<Field
					component={Input}
					type="text"
					name="username"
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					validate={[required, passwordLength, isTrimmed]}
				/>
				<button
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					Register
				</button>
				<Link to="/" className="login">
					Already have an account?Click here!
				</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('registration', Object.keys(errors)[0]));
	}
})(RegistrationForm);

