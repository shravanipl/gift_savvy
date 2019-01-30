import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

import load2 from '../images/load2.gif';
import { fetchRecipient } from '../actions/recipient-details';
import { EditRecipientForm } from './edit-recipient-form';

export class EditRecipient extends React.Component {
	componentDidMount() {
		//Recipient id is passed as params in props, so need to extract it
		const recipientId = this.props.match.params.id;
		this.props.dispatch(fetchRecipient(recipientId));
	}

	render() {
		if (this.props.isFetching)
			return (
				<div id="loading">
					<img src={load2} alt="Loading..." />
				</div>
			);

		let initialValues;

		if (this.props.recipient) {
			initialValues = this.props.recipient;
		}

		return (
			<div className="dashboard">
				<h2>Update Recipient</h2>
				<section className="outermost-section">
					<EditRecipientForm initialValues={initialValues} />
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		recipient: state.recipient.recipient,
		isFetching: state.recipient.isFetching
	};
};

export default requiresLogin()(connect(mapStateToProps)(EditRecipient));
