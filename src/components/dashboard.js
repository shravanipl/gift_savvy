import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import load1 from '../images/load1.gif';
import Nav from './nav';
import requiresLogin from './requires-login';
import RecipientCard from './recipient-card';
import { fetchAllRecipients } from '../actions/recipient-details';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchAllRecipients());
	}

	render() {
		let recipientDetails;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={ load1} alt="Loading..." />
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
				<Link to="/addRecipients" className="addRecipients">
					<button className="addRecipients">Add Recipients</button>
				</Link>
				<ul>
					{this.props.recipients && this.props.recipients.length ? (
						recipientDetails
					) : (
						<span className="message">
							You have not added any recipients yet.Please add them!
						</span>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		recipients: state.recipient.recipients,
		isFetching: state.recipient.isFetching
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
