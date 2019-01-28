import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { callSearchGiftsAPI } from '../actions/gift-search';
import GiftResult from './giftResult';

export class GiftSearchForm extends React.Component {
	onSubmit(values) {
		const inputs = Object.assign({}, values);
		return this.props.dispatch(callSearchGiftsAPI(inputs));
	}
	render() {
		let giftDetails;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={'../images/load.png'} alt="Loading..."/>
				</div>
			);
		} else {
			if (this.props.gifts && this.props.gifts.length) {
				let gifts = this.props.gifts;
				giftDetails = gifts.map((gift, index) => <GiftResult key={index} {...gift} />);
			}
		}
		return (
			<div >
				<form className="giftSearch"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="item">Gift Item</label>
					<Field component="input" name="item" type="text" />

					<label htmlFor="brand">Brand</label>
					<Field component="input" name="brand" type="text" />

					<label htmlFor="category">Category</label>
					<select
						id="category"
						name="category"
						label="Category"
						aria-label="select a value">
						<option key={1000000} value={''}>
							Select a category
						</option>
					</select>

					<label htmlFor="price">Price</label>
					<Field component="input" name="price" type="text" />
					<button type="submit" className="submit">
						Search Gifts
					</button>
			</form>

				<div className="giftResults">{ giftDetails }</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gifts: state.giftSearch.gifts
	};
};

export default withRouter(
	connect(mapStateToProps)(
		reduxForm({
			form: 'giftSearch'
		})(GiftSearchForm)
	)
);
