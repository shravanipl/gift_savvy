import React from 'react';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import LoginForm from './loginForm';
import Nav from './nav';

function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="landing">
			<h2 className="appInfo">Never miss to greet and gift your loved ones</h2>
			<LoginForm/>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
