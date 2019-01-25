import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './loginForm';

function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		// <div className="landing">
			 <div> 
				{/* <a href="#login" className="more scrolly">
					Proceed
				</a>
				<div className="inner"> */}
				<h3>Never miss to greet and gift your loved ones</h3>
					<h4>This is a gift tracking app integrated with gift search</h4>
				{/* </div> */}
				{/* <img
					id="image"
					src={require('../images/gifts3.jpg')}
					alt="background image"
				/> */}
				{/*  */}
					
				{/* </div> */}
			{/* </div> */}
			<LoginForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
