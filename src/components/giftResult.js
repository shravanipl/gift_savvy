import React from 'react';

export default function GiftResult(props) {
	return (
		<li className="giftResult">
			<div className="container">
				<div className="card">
					<h2>{props.name}</h2>
					<img src={props.imageUrl} alt="Item" />
					<a href={ props.url }>Click</a>
				</div>
			</div>
		</li>
	);
}
