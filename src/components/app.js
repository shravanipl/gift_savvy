import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './landing-page';
import Dashboard from './dashboard';
import AddRecipients from './add-recipient';
import RegistrationPage from './registration-page';
import GiftSearchPage from './gift-search-page';
import EditRecipient from './edit-recipient';
import DeleteRecipient from './delete-recipient';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000
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
				<h1 className="colour">
					<span className="main-title">Gift Savvy<i className="fa fa-gift" aria-hidden="true" /></span>
				</h1>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={RegistrationPage} />
				<Route exact path="/addRecipients" component={AddRecipients} />
				<Route exact path="/giftSearchPage" component={GiftSearchPage} />
				<Route exact path="/edit-recipient/:id" component={EditRecipient} />
				<Route exact path="/delete-recipient/:id" component={DeleteRecipient} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
