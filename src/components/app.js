import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './nav';
import LandingPage from './landingPage';
import Dashboard from './dashboard';
import AddRecipients from './add-recipient';
import RegistrationPage from './registrationPage';
import GiftSearchPage from './giftSearchPage';
import EditRecipient from './edit-recipient';
import DeleteRecipient from './delete-recipient';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			// When we are logged in, refresh the auth token periodically
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			// Stop refreshing when we log out
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000 // One hour
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className="app">
				<Nav/>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={RegistrationPage} />
				<Route exact path="/addRecipients" component={AddRecipients} />
				<Route exact path="/giftSearchPage" component={ GiftSearchPage } />
				<Route exact path="/edit-recipient/:id" component={ EditRecipient } />
				<Route exact path="/delete-recipient/:id" component={ DeleteRecipient } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
