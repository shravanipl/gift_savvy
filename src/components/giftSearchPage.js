import React from 'react';
import { connect } from 'react-redux';

import Logout from './logout';
import GiftSearchForm from './giftSearchForm';
import requiresLogin from './requiresLogin';

export function GiftSearchPage(props) {
	return (
		<div className="giftSearchPage">
			<h2>Search the items you want to gift</h2>
			<GiftSearchForm />
		</div>
	);
}

export default requiresLogin()(connect()(GiftSearchPage));
