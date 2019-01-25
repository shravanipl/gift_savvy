import React from 'react';
import { connect } from 'react-redux';

import Nav from './nav';
import GiftSearchForm from './giftSearchForm';
import requiresLogin from './requiresLogin';

export function GiftSearchPage(props) {
	return (
		<div className="giftSearchPage">
			<Nav/>
			<p className="giftPageTitle">Search the items you want to gift</p>
			<GiftSearchForm />
		</div>
	);
}

export default requiresLogin()(connect()(GiftSearchPage));
