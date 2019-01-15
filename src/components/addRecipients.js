import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

export class AddRecipients extends React.Component {
	render() {
		return (
			<form>
				<label htmlFor="name">Name</label>
				<Field component="input" name="name" type="text" />

				<label htmlFor="relationship">Relationship</label>
				<Field component="input" type="text" name="relationship" required />

				<label htmlFor="occassion">Occassion</label>
				<Field component="input" type="text" name="occassion" required />

				<label htmlFor="giftDate">Gift Date</label>
				<Field component="input" type="text" name="giftDate" required />

				<label htmlFor="gift">Gift</label>
				<Field component="input" type="text" name="gift" required />

				<label htmlFor="budget">Budget</label>
				<Field component="input" type="number" name="budget" required />

				<label htmlFor="status">Gift Status</label>
				<Field component="input" type="text" name="status" required />

				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default withRouter(
	reduxForm({
		form: 'addRecipients'
	})(AddRecipients)
);
