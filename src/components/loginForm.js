import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

export class LoginForm extends React.Component {
	onSubmit(values) {
		// return this.props.dispatch(login(values.username, values.password));
	}
	render() {
		const { error } = this.props;

		return (
			<form
				className="loginForm"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="username">Username</label>
				<Field component="input" type="text" name="username" id="username" />
				<label htmlFor="password">Password</label>
				<Field
					component="input"
					type="password"
					name="password"
					id="password"
				/>

				{error && (
					<div className="form-error" aria-live="polite">
						{this.props.error}
					</div>
				) }
				
				<button disabled={this.props.pristine || this.props.submitting}>
					Log In
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
