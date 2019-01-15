import React from 'react';
import Logout from './logout';
import  GiftSearchForm from './giftSearchForm';

export default class GiftSearchPage extends React.Component {
	render() {
		return (
			<div className="giftSearchPage">
				<h2>Search the items you want to gift</h2>
				<Logout />
				<GiftSearchForm />
			</div>
		);
	}
}

