import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<div>
		<div className="colour">
			<h3>Never miss to greet and gift your loved ones</h3>
			<h4>This is a gift tracking app integrated with gift search</h4>
		</div>
		<div className="registration page-wrapper bg-gra-01 p-b-100 font-poppins">
			<div className="wrapper wrapper--w780">
				<RegistrationForm />
			</div>
			</div>
			</div>
	);
}
const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser != null
});

export default connect(mapStateToProps)(RegistrationPage);
