import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './login-form';

function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
			 <div> 
				<h3>Never miss to greet and gift your loved ones</h3>
					<h4>This is a gift tracking app integrated with gift search</h4>
			<LoginForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
