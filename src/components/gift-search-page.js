import React from 'react';
import { connect } from 'react-redux';

import Nav from './nav';
import GiftSearchForm from './gift-search-form';
import requiresLogin from './requires-login';

export function GiftSearchPage() {
	return (
		<div className="giftSearchPage">
			<Nav />
			<p className="giftPageTitle">Search the items you want to gift</p>
			<GiftSearchForm />
		</div>
	);
}

export default requiresLogin()(connect()(GiftSearchPage));
