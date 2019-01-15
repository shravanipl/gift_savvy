import React from 'react';

export default function GiftResult() {
	return (
		<li className="giftResult">
			<div className="container">
				<div className="card">
					<a href="this.props.url">
            { this.props.image }
					</a>
				</div>
			</div>
		</li>
	);
}
