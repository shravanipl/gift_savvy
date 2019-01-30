import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import {
	updateRecipient,
	fetchRecipientDetails
} from '../actions/recipient-details';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class EditRecipientForm extends React.Component {
	onSubmit(values) {
		const recipientId = this.props.initialValues.id;
		const recipient = Object.assign({}, { id: recipientId }, values);
		console.log('edit', recipient);
		return this.props.dispatch(updateRecipient(recipient));
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
					className="edit-expense-form"
					id="edit-property-form"
					aria-label="edit recipient"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<section className="property-details">
						<label htmlFor="name">Name</label>
						<Field
							component="input"
							type="text"
							name="name"
							id="name"
							aria-label="Name"
							required
						/>

						<label htmlFor="relationship">Relationship</label>
						<Field
							component="input"
							name="relationship"
							type="text"
							required
							id="relationship"
							aria-label="relationship"
						/>

						<label htmlFor="occassion">Occassion</label>
						<Field
							component="input"
							type="text"
							name="occassion"
							aria-label="occassion"
							id="occassion"
							required
						/>

						<label htmlFor="giftDate">Gift Date</label>
						<Field component="input" type="date" name="giftDate" required />

						<label htmlFor="gift">Gift</label>
						<Field component="input" type="text" name="gift" required />

						<label htmlFor="budget">Cost</label>
						<Field component="input" type="number" name="budget" required />

						<label htmlFor="giftStatus">Gift Status</label>
						<Field
							id="giftStatus"
							component="select"
							name="giftStatus"
							required>
							<option key={1} value={'Not Purchased'}>
								Not Purchased
							</option>
							<option key={2} value={'Purchased'}>
								Purchased
							</option>
							<option key={3} value={'Gifted'}>
								Gifted
							</option>
						</Field>
					</section>
					<div>
						<button
							type="submit"
							className="button"
							disabled={this.props.pristine || this.props.submitting}>
							Save Changes
						</button>
						<Link to="/dashboard">
							<button className="button" type="button">
								Back
							</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditRecipientForm = reduxForm({
	form: 'editRecipient',
	enableReinitialize: true,
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('editExpense', Object.keys(errors)[0]))
})(EditRecipientForm);

EditRecipientForm = connect(
	state => ({ initialValues: state.recipient.recipient }),
	{
		load: fetchRecipientDetails
	}
)(EditRecipientForm);

export default EditRecipientForm;
