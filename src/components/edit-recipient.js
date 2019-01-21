import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requiresLogin';
import { fetchRecipient } from '../actions/recipientDetails';
// import './dashboard.css';
import { EditRecipientForm } from './edit-recipient-form';
// import spinner from '../images/ajax-loader.gif';

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
					<img src={''} alt="Loading..." />
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
