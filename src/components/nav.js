import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './nav.css';

export class Nav extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}
	render() {
		//mobile devices display a hamburger menu
		//large screens display a top nav-bar menu
		let logout;
		if (this.props.loggedIn) {
			logout = (
				<a onClick={() => this.logOut()} className="nav-large-menu-items">
					Log out
				</a>
			);
		}
		const loggedIn = this.props.loggedIn;
		return (
			<nav aria-label="main menu">
				<h1>Gift Savvy</h1>
				{loggedIn ? (
					<div id="nav-large-menu">
						{ logout}
						<Link to="/giftSearchPage" className="nav-large-menu-items">
							Search Gifts
						</Link>
						<Link to="/dashboard" className="nav-large-menu-items">
							{/* <img className="logo-sm" src={ require("../images/house-big.png") } alt="CribTrakr Logged in" /> */}
							Home
						</Link>
					</div>
				) : (
					<div id="nav-large-menu">
							{/* <img className="logo-sm" src={ require("../images/house-big.png") } alt="CribTrakr Logged out" /> */}
						<Link to="/register" className="nav-large-menu-items">
							Create Account
						</Link>
					</div>
				)}
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);
