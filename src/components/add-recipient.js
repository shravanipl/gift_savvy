import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requiresLogin';
// import './dashboard.css';
import { AddRecipientForm } from './add-recipient-form';
// import spinner from '../images/ajax-loader.gif';

export class AddRecipient extends React.Component {
	
	render() {
		if (this.props.isFetching) {
			alert("loading");

			return (
			<div id="loading">
				{/* <img src={spinner} alt="Loading..." /> */ }
			</div>
			);
		}

		return (
			<div className="dashboard">
				<h1>Add new Recipient</h1>
				<section className="outermost-section">
					<AddRecipientForm/>
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
