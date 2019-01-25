import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from './nav';
import requiresLogin from './requiresLogin';
import RecipientCard from './recipientCard';
import { fetchAllRecipients } from '../actions/recipientDetails';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchAllRecipients());
	}

	render() {
		let recipientDetails;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={'../images/load.png'} alt="Loading..." />
				</div>
			);
		} else {
			if (this.props.recipients && this.props.recipients.length) {
				let recipients = this.props.recipients;
				recipientDetails = recipients.map((recipient, index) => (
					<RecipientCard key={index} {...recipient} />
				));
			}
		}
		return (
			<div>
				<Nav />
				<Link to="/addRecipients">
					<button className="addRecipients">Add Recipients</button>
				</Link>
				<ul>
					{this.props.recipients && this.props.recipients.length ? (
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
	//console.log(state);
	return {
		username: state.auth.currentUser.username,
		recipients: state.recipient.recipients,
		isFetching: state.recipient.isFetching
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
// export default connect(mapStateToProps)(Dashboard);
