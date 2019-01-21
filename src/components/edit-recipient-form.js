import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import {
	updateRecipient,
	fetchRecipientDetails
} from '../actions/recipientDetails';
// import './dashboard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Categories } from '../data';

export class EditRecipientForm extends React.Component {
	onSubmit(values) {
		const recipientId = this.props.initialValues.id;
    const recipient = Object.assign({}, { id: recipientId }, values);
    console.log("edit",recipient);
		return this.props.dispatch(updateRecipient(recipient));
	}

	render() {
		// let categories = Categories;
		// const categoriesOptions = categories.map((category, index) =>
		//   <option key={ index } value={ category.value }>{ category.value }</option>
		// );
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
						<Field
							component="input"
							type="date"
							name="giftDate"
							label="GiftDate"
							required
						/>
						<Field
							component="input"
							type="text"
							name="gift"
							label="Gift"
							required
						/>
						<Field
							component="input"
							type="number"
							name="budget"
							label="Budget"
							required
						/>
						<Field
							component="input"
							type="text"
							name="giftStatus"
							label="Gift Status"
							required
						/>
					</section>
					<div>
						<button
							type="submit"
							disabled={this.props.pristine || this.props.submitting}>
							Save Changes
						</button>
						<Link to="/dashboard">
							<button type="button">Back</button>
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
