import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './input';
import Select from './select';
import {
	updateRecipient,
	fetchRecipientDetails
} from '../actions/recipient-details';
import { required } from '../validators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined;
const minValue1 = minValue(1);

export class EditRecipientForm extends React.Component {
	onSubmit(values) {
		const recipientId = this.props.initialValues.id;
		const recipient = Object.assign({}, { id: recipientId }, values);
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
					className="recipient-form error-label"
					id="edit-recipient-form"
					aria-label="edit recipient"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<section className="recipient-details">
						<label htmlFor="name">Name</label>
						<Field
							component={Input}
							type="text"
							name="name"
							id="name"
							aria-label="Name"
							validate={[required]}
						/>

						<label htmlFor="relationship">Relationship</label>
						<Field
							component={Input}
							name="relationship"
							type="text"
							required
							id="relationship"
							aria-label="relationship"
							validate={[required]}
						/>

						<label htmlFor="occassion">Occasion</label>
						<Field
							component={Input}
							type="text"
							name="occassion"
							aria-label="occassion"
							id="occassion"
							validate={[required]}
						/>

						<label htmlFor="giftDate">Occasion Date</label>
						<Field
							component={Input}
							type="date"
							name="giftDate"
							validate={[required]}
						/>

						<label htmlFor="gift">Gift</label>
						<Field
							component={Input}
							type="text"
							name="gift"
							validate={[required]}
						/>

						<label htmlFor="budget">Cost</label>
						<Field
							component={Input}
							type="number"
							name="budget"
							validate={[minValue1, required]}
							required
						/>

						<label htmlFor="giftStatus">Gift Status</label>
						<Field
							id="giftStatus"
							component={Select}
							name="giftStatus"
							validate={[required]}>
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
						<button type="submit" className="button">
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
