import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
import './recipient-card.css';

export default function RecipientCard(props) {
	return (
		<li className="recipientCard">
			<div className="container">
				<div className="recipientCardHeader">
					<span className="card-title">{props.propName}</span>
					<span className="icons">
						<Link to={`edit-recipient/${props.id}`} aria-label="edit recipient">
							{/* <i className="fa fa-pencil" aria-hidden="true" /> */ }
							Edit
						</Link>
						<Link
							to={`delete-recipient/${props.id}`}
							aria-label="delete recipient">
							{/* <i className="fa fa-times" aria-hidden="true" /> */ }
							Delete
						</Link>
					</span>
				</div>
				<p className="recipient">
					<span className="recipient-field-title">Name: </span>
					{props.name}
				</p>
				<p className="relationship">
					<span className="recipient-field-title">Relationship:</span>
					{props.relationship}
				</p>
				<p className="occassion">
					<span className="recipient-field-title">Occassion: </span>
					{props.occassion}
				</p>
				{/* <p className="date">
					<span className="recipient-field-title">Gift Date: </span>
					<Moment
						tz="America/Los_Angeles"
						aria-hidden="true"
						format="DD-MMM-YYYY">
						{props.date}
					</Moment>
				</p> */}
				<p className="gift">
					<span className="recipient-field-title">Gift: </span>
					{props.gift}
				</p>
				<p className="budget">
					<span className="recipient-field-title">Budget: </span>
					{props.budget}
				</p>
				<p className="status">
					<span className="recipient-field-title">Gift Status: </span>
					{props.giftStatus}
				</p>
			</div>
		</li>
	);
}
