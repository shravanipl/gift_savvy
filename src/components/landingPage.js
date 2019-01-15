import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';

function LandingPage() {
	return (
		<div>
			<h2>Never miss to greet and gift your loved ones</h2>
			<LoginForm/>
			<Link to="/register">Sign Up</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
