import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
					<img src={ '../images/load.png' } alt="Loading..." />
				</div>
			);
		}
	
		else if (this.props.gifts && this.props.gifts.length) {
			let gifts = this.props.gifts;
			giftDetails = gifts.map((gift, index) => (
				<GiftResult key={ index } { ...gift } />
			));
		}
		else if (this.props.err) {
			err = <p>{ this.props.err }</p>;
		}
	
		return (
			<div>
				<form
					className="giftSearch"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="item">Gift Item</label>
					<Field component="input" name="item" type="text" />

					<button type="submit" className="submit">
						Search Gifts
					</button>
				</form>

				<div className="error">{err}</div>
				<div className="giftResults">{ giftDetails }</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		gifts: state.giftSearch.gifts,
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
