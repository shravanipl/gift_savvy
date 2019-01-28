import React from 'react';
import './gift-search.css';

export default function GiftResult(props) {
	return (
		<ul className="giftResults">
		<li className="giftResult">
			<div className="gift-container">
				<div className="card">
					<h2>{props.name}</h2>
					<img src={props.imageUrl} alt="Item" />
					<a href={ props.url } target="_blank">Click</a>
				</div>
			</div>
			</li>
		</ul>
	);
}
