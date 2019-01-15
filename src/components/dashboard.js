import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './logout';
// import requiresLogin from './requiresLogin';
import RecipientCard from './recipientCard';
import AddRecipients from './addRecipients';
// import { fetchRecipientDetails } from '../actions/recipientDetails';

class Dashboard extends React.Component {
	componentDidMount() {
		//	this.props.dispatch(fetchRecipientDetails());
	}

	render() {
		let recipientDetails;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={''} alt="Loading..." />
				</div>
			);
		} else {
			if (this.props.recipients && this.props.expenses.length) {
				let recipients = this.props.recipients;
				recipientDetails = recipients.map((recipient, index) => (
					<RecipientCard key={index} link={`/editRecipient`} {...recipient} />
				));
			}
		}
		return (
			<div>
				<h1>Welcome {this.props.username}!</h1>
				<Logout />
				<Link to="/addRecipients">
					<button className="addRecipients">Add Recipients</button>
				</Link>
				<ul>
					{this.props.recipientDetails && this.props.recipientDetails.length ? (
						recipientDetails
					) : (
						<span>You have not added any recipients yet.Please add them!</span>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// const { currentUser } = state.auth;
	return {
		// 	username: state.auth.currentUser.username,
		// 	recipients: state.recipients.recipientDetails,
		// 	protectedData: state.protectedData.data
	};
};

//export default requiresLogin()(connect(mapStateToProps)(Dashboard));
export default connect(mapStateToProps)(Dashboard);
