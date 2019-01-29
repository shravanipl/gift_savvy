import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import { login } from '../actions/auth';
import './nav.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}
	render() {
		const { error } = this.props;

		return (
			<div className="login_form">
			<form
				className="loginForm" id="login"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="username">Username</label>
				<Field component="input" type="text" name="username" id="username" required/>
				<label htmlFor="password">Password</label>
				<Field
					component="input"
					type="password"
					name="password"
					id="password" required
				/>

				{error && (
					<div className="form-error" aria-live="polite">
						{this.props.error}
					</div>
				)}

				<button disabled={this.props.pristine || this.props.submitting}>
					Log In
				</button>
				<Link to="/register" className="registerLink">
					Create Account
				</Link>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
