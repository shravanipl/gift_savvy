import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Select from './select';
import { addRecipient } from '../actions/recipient-details';
import { Link, Redirect } from 'react-router-dom';

export class AddRecipientForm extends React.Component {
	onSubmit(values) {
		console.log(values);
		const recipient = Object.assign({}, values);
		return this.props.dispatch(addRecipient(recipient));
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

					<label htmlFor="budget">Cost</label>
					<Field component="input" type="number" name="budget" required />

					<label htmlFor="status">Gift Status</label>
					<Field id="status" component={Select} name="status" required>
						<option key={2333333} value={''}>
							Please Select
						</option>
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

					<button className="button"  type="submit">
						Submit
					</button>
					<Link to="/dashboard">
						<button className="button" type="button" aria-label="go back">
							Back
						</button>
					</Link>
				</form>
			</div>
		);
	}
}

AddRecipientForm = reduxForm({
	form: 'addRecipient',
	onSubmitFail: (errors, dispatch) => {
		console.log(`Error: ${JSON.stringify(errors)}`);
		dispatch(focus('addRecipient', Object.keys(errors)[0]));
	}
})(AddRecipientForm);

export default AddRecipientForm;
