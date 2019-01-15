import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default function RecipientCard(props) {
	return (
		<li className="recipientCard">
			<div className="container">
				<div className="recipientCardHeader">
					<span className="card-title">{props.propName}</span>
					<span className="icons">
						<Link to={`${props.link}/${props.id}`} aria-label="edit recipient">
							<i className="fa fa-pencil" aria-hidden="true" />
						</Link>
						<Link
							to={`deleteRecipient/${props.id}`}
							aria-label="delete recipient">
							<i className="fa fa-times" aria-hidden="true" />
						</Link>
					</span>
				</div>
				<p className="recipient">
					<span className="recipient-field-title">Name: </span>
					{props.name}
				</p>
				<p className="relationship">
					<span className="recipient-field-title">Relationship:</span>
					{props.name}
				</p>
				<p className="occassion">
					<span className="recipient-field-title">Occassion: </span>
					{props.name}
				</p>
				<p className="date">
					<span className="expense-field-title">Gift Date: </span>
					<Moment
						tz="America/Los_Angeles"
						aria-hidden="true"
						format="MMM DD, YYYY">
						{props.date}
					</Moment>
				</p>
				<p className="gift">
					<span className="expense-field-title">Gift: </span>
					{props.category}
        </p>
        <p className="budget">
          <span className="expense-field-title">Budget: </span>
          { props.category }
        </p>
        <p className="status">
          <span className="expense-field-title">Gift Status: </span>
          { props.category }
        </p>
			</div>
		</li>
	);
}
