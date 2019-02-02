import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { deleteRecipient, fetchRecipient } from '../actions/recipient-details';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class DeleteRecipientForm extends React.Component {
	onSubmit(values) {
		const recipientId = this.props.initialValues.id;
		const recipient = Object.assign({}, { id: recipientId }, values);
		return this.props.dispatch(deleteRecipient(recipient));
	}

	render() {
		if (this.props.submitSucceeded === true) {
			return (
				<div>
					<Redirect to={`/dashboard`} />
				</div>
			);
		}

		return (
			<div>
				<form
					className="delete-recipient-form"
					id="delete-recipient-form"
					aria-label="delete recipient details"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<section className="recipient-details">
						<div className="del-recipient">
							<span>
								<u className="colour">Name</u>: {this.props.initialValues.name}
							</span>
							<br />
							<span>
								<u className="colour">Relationship</u>:{' '}
								{this.props.initialValues.relationship}
							</span>
							<br />
							<span>
								<u className="colour">Occassion</u>:{' '}
								{this.props.initialValues.occassion}
							</span>
							<br />
							<span>
								<u className="colour">Gift Date</u>:{' '}
							  	{moment(this.props.initialValues.giftDate).format(
									'DD-MMM-YYYY'
								)}
							</span>
							<br />
							<span>
								<u className="colour">Gift</u>: {this.props.initialValues.gift}
							</span>
							<br />
							<span>
								<u className="colour">Cost</u>:{' '}
								{this.props.initialValues.budget}
							</span>
							<br />
							<span>
								<u className="colour">Gift Status</u>:{' '}
								{this.props.initialValues.giftStatus}
							</span>
							<br />
						</div>
					</section>
					<div>
						<button type="submit" aria-label="delete recipient">
							Delete
						</button>
						<Link to="/dashboard">
							<button type="button" aria-label="Cancel">
								Cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

DeleteRecipientForm = reduxForm({
	form: 'deleteExpense'
})(DeleteRecipientForm);

DeleteRecipientForm = connect(
	state => ({ initialValues: state.recipient.recipient }),
	{ load: fetchRecipient }
)(DeleteRecipientForm);

export default DeleteRecipientForm;
