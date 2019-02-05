import React from 'react';
import { connect } from 'react-redux';

import load2 from '../images/load2.gif';
import requiresLogin from './requires-login';
import { AddRecipientForm } from './add-recipient-form';

export class AddRecipient extends React.Component {
	render() {
		if (this.props.isFetching) {
			alert('loading');

			return <div id="loading">{<img src={load2} alt="Loading..." />}</div>;
		}

		return (
			<div className="dashboard">
				<h2 className="add_title">Add Recipient</h2>
				<section className="outermost-section">
					<AddRecipientForm />
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isFetching: state.recipient.isFetching
	};
};

export default requiresLogin()(connect(mapStateToProps)(AddRecipient));
