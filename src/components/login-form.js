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
			<div className="login-card card-3">
				<div className="card-heading" />
				<form
					className="login-form card-body"
					id="login"
					autoComplete="off"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<h2 className="register">Login</h2>
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<Field
							className="input--style-3"
							component="input"
							type="text"
							name="username"
							id="username"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<Field
							className="input--style-3"
							component="input"
							type="password"
							name="password"
							id="password"
							required
						/>
					</div>
					{error && (
						<div className="form-error" aria-live="polite">
							{this.props.error}
						</div>
					)}

					<button disabled={this.props.pristine || this.props.submitting}>
						Log In
					</button>
					<Link to="/register" className="registerLink">
						New User? Create Account
					</Link>
					<div className="demo">
						<h5>Demo</h5>
						<p>Username : test3</p>
						<p>Password : test3</p>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
