import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import Select from './select';
import { addRecipient } from '../actions/recipient-details';
import { Link, Redirect } from 'react-router-dom';
import { required, nonEmpty } from '../validators';

export class AddRecipientForm extends React.Component {
	onSubmit(values) {
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
					className="recipient-form error-label"
					aria-label="add new recipient form"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					autoComplete="off">

					<label htmlFor="name">Name</label>
					<Field
						component={Input}
						name="name"
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="relationship">Relationship</label>
					<Field
						component={Input}
						type="text"
						name="relationship"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="occassion">Occassion</label>
					<Field
						component={Input}
						type="text"
						name="occassion"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="giftDate">Date of Occassion</label>
					<Field
						component={Input}
						type="date"
						name="giftDate"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="gift">Gift</label>
					<Field component={ Input } type="text" name="gift" />
					
					<label htmlFor="budget">Cost</label>
					<Field component={ Input } type="number" name="budget" />
					
					<label htmlFor="giftStatus">Gift Status</label>
					<Field
						id="status"
						component={Select}
						name="giftStatus"
						validate={[required, nonEmpty]}>
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
					<button className="button" type="submit">
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
		dispatch(focus('addRecipient', Object.keys(errors)[0]));
	}
})(AddRecipientForm);

export default AddRecipientForm;
