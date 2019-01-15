import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { callSearchGiftsAPI } from '../actions/gift-search';
import GiftResult from './giftResult';

export class GiftSearchForm extends React.Component {
	render() {
		let giftDetails;
		if (this.props.isFetching) {
			return (
				<div id="loading">
					<img src={''} alt="Loading..." />
				</div>
			);
		} else {
			if (this.props.gifts && this.props.gifts.length) {
				let gifts = this.props.gifts;
				giftDetails = giftDetails.map((gift, index) => (
					<GiftResult {...gift}/>
				));
			}
		}
		return (
			<form>
				<fieldset className="giftSearch">
					<legend id="legend">Gift Search</legend>

					<label htmlFor="item">Gift Item</label>
					<Field component="input" name="item" type="text" />

					<label htmlFor="brand">Brand</label>
					<Field component="input" name="brand" type="text" />

					<label htmlFor="category">Category</label>
					<select
						id="category"
						name="category"
						label="Category"
						aria-label="select a value"
						required>
						<option key={1000000} value={''}>
							Select a category
						</option>
					</select>

					<label htmlFor="price">Price</label>
					<Field component="input" name="price" type="text" />
					<button
						type="submit"
						className="submit"
						onclick={this.props.dispatch(callSearchGiftsAPI())}>
						Search Gifts
					</button>
					{<ul className="giftResults">{giftDetails}</ul>}
				</fieldset>
			</form>
		);
	}
}

export default withRouter(
	reduxForm({
		form: 'giftSearch'
	})(GiftSearchForm)
);
