import React from 'react';
import { connect } from 'react-redux';

import load2 from '../images/load2.gif';
import requiresLogin from './requires-login';
import { fetchRecipient } from '../actions/recipient-details';
import { DeleteRecipientForm } from './delete-recipient-form';

export class DeleteRecipient extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchRecipient(this.props.match.params.id));
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

		if (!initialValues) {
			return (
				<div id="loading">
					<img src={ load2 } alt="Loading..." />
        </div>
			);
		}

		return (
			<div className="dashboard">
				<h1>Delete Recipient</h1>
				<section>
					<DeleteRecipientForm initialValues={initialValues} />
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

export default requiresLogin()(connect(mapStateToProps)(DeleteRecipient));
