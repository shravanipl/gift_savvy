import React from 'react';

import './gift-search.css';

export default function GiftResult(props) {
	return (
		<ul>
			<li className="giftResult">
				<div className="card">
					<a href={ props.url } target="_blank" rel="noopener noreferrer">
						<img src={ props.imageUrl } alt="Item" />
						</a>
						<a href={props.url} target="_blank" rel="noopener noreferrer">
							{ props.name }
						</a>
						<p>{ `$${props.price}`}</p>
					</div>
			</li>
		</ul>
	);
}
