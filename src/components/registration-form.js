import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './input';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { email, required, nonEmpty, length, isTrimmed } from '../validators';

const passwordLength = length({ min: 4, max: 72 });
const nameLength = length({ min: 3, max: 20 });

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
			<div className="login-card card-3">
				<div className="card-heading" />
				<form
					className="login-form card-body"
					autoComplete="off"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<h2 className="register">Registration form</h2>
					<div className="input-group">
						<label htmlFor="name">Name</label>
						<Field
							className="input--style-3"
							component={Input}
							type="text"
							name="name"
							validate={[required, nameLength, nonEmpty, isTrimmed]}
						/>
					</div>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<Field
							component={Input}
							className="input--style-3"
							type="text"
							name="email"
							validate={[email, required, nonEmpty, isTrimmed]}
						/>
					</div>
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<Field
							className="input--style-3"
							component={Input}
							type="text"
							name="username"
							validate={[required, nonEmpty, isTrimmed]}
						/>
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<Field
							className="input--style-3"
							component={Input}
							type="password"
							name="password"
							validate={[required, passwordLength, isTrimmed]}
						/>
					</div>

					<button
						type="submit">
						Register
					</button>
					<Link to="/" className="login">
						Already have an account?Click here!
					</Link>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('registration', Object.keys(errors)[0]));
	}
})(RegistrationForm);
