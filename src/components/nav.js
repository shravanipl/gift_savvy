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
		let logout;
		if (this.props.loggedIn) {
			logout = (
				<a onClick={() => this.logOut()} className="nav-large-menu-items">
					Log out
				</a>
			);
		}
		const loggedIn = this.props.loggedIn;
		if (loggedIn) {
			return (
				<nav aria-label="main menu">
					<div id="nav-large-menu">	
						<Link to="/dashboard" className="nav-large-menu-items">
							Home
						</Link>
						<Link to="/giftSearchPage" className="nav-large-menu-items">
							Search Gifts
						</Link>
						{ logout }
					</div>
				</nav>
			)
		}
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);
