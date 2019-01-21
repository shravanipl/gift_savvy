import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { addRecipient } from '../actions/recipientDetails';
import { Link, Redirect } from 'react-router-dom';

export class AddRecipientForm extends React.Component {
	onSubmit(values) {
		const recipient = Object.assign({}, values);
		return this.props.dispatch(addRecipient(recipient));
	}

	render() {
		console.log(this.props.submitSucceeded);
		if (this.props.submitSucceeded === true) {
			console.log('this.props', this.props.submitSucceeded);

			return (
				<div>
					<Redirect to={`/dashboard`} />
				</div>
			);
		}

		return (
			<div>
				<form
					className="add-recipient-form"
					aria-label="add new recipient form"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="name">Name</label>
					<Field component="input" name="name" type="text" />

					<label htmlFor="relationship">Relationship</label>
					<Field component="input" type="text" name="relationship" required />

					<label htmlFor="occassion">Occassion</label>
					<Field component="input" type="text" name="occassion" required />

					<label htmlFor="giftDate">Gift Date</label>
					<Field component="input" type="date" name="giftDate" required />

					<label htmlFor="gift">Gift</label>
					<Field component="input" type="text" name="gift" required />

					<label htmlFor="budget">Budget</label>
					<Field component="input" type="number" name="budget" required />

					<label
						htmlFor="status"
						disabled={
							this.props.pristine || this.props.invalid || this.props.submitting
						}>
						Gift Status
					</label>
					<Field component="input" type="text" name="status" required />

					<button type="submit">Submit</button>
					<Link to="/dashboard">
						<button type="button" aria-label="go back">
							Back
						</button>
					</Link>
				</form>
			</div>
		);
	}
}

AddRecipientForm = reduxForm({
	form: 'addRecipient'
	// onSubmitFail: (errors, dispatch) => {
	// 	console.log(`Error: ${JSON.stringify(errors)}`);
	// 	dispatch(focus('addRecipient', Object.keys(errors)[0]));
	}
)(AddRecipientForm);


export default AddRecipientForm;
