import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import load2 from '../images/load2.gif';
import { callSearchGiftsAPI } from '../actions/gift-search';
import GiftResult from './gift-result';
import './gift-search.css';

export class GiftSearchForm extends React.Component {
	onSubmit(values) {
		const inputs = Object.assign({}, values);
		return this.props.dispatch(callSearchGiftsAPI(inputs));
	}
	render() {
		let giftDetails;
		let err;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={load2} alt="Loading..." />
				</div>
			);
		} else if (this.props.gifts.items && this.props.gifts.totalItems > 0) {
			let gifts = this.props.gifts.items;
			giftDetails = gifts.map((gift, index) => (
				<GiftResult key={index} {...gift} />
			));
		} else if (this.props.gifts.totalItems === 0) {
			err = <p>Please enter valid search term!</p>;
		} else if (this.props.err) {
			err = <p>{this.props.err}</p>;
		}

		return (
			<div>
				<form
					className="giftSearch"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="item">Gift Item</label>
					<Field
						component="input"
						name="item"
						type="text"
						placeholder="eg.Nike running shoes"
						required
					/>

					<button type="submit" className="submit">
						Search Gifts
					</button>
				</form>

				<div className="error">{err}</div>
				<div className="giftResults">{giftDetails}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gifts: state.giftSearch.gifts,
		isFetching: state.giftSearch.isFetching,
		err: state.giftSearch.error
	};
};

export default withRouter(
	connect(mapStateToProps)(
		reduxForm({
			form: 'giftSearch'
		})(GiftSearchForm)
	)
);
