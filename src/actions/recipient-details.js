import { API_BASE_URL } from '../config.js';

export const ADD_RECIPIENT_DETAILS = 'ADD_RECIPIENT_DETAILS';
export const addRecipientDetails = recipient => ({
	type: ADD_RECIPIENT_DETAILS,
	newRecipient: recipient
});

export const ADD_RECIPIENT_DETAILS_SUCCESS = 'ADD_RECIPIENT_DETAILS_SUCCESS';
export const addRecipientDetailsSuccess = recipient => ({
	type: ADD_RECIPIENT_DETAILS_SUCCESS,
	newRecipient: recipient
});

export const ADD_RECIPIENT_DETAILS_ERROR = 'ADD_RECIPIENT_DETAILS_ERROR';
export const addRecipientDetailsError = error => ({
	type: ADD_RECIPIENT_DETAILS_ERROR,
	error
});

export const UPDATE_RECIPIENT_DETAILS = 'UPDATE_RECIPIENT_DETAILS';
export const updateRecipientDetails = recipient => ({
	type: UPDATE_RECIPIENT_DETAILS,
	recipient
});

export const UPDATE_RECIPIENT_DETAILS_SUCCESS =
	'UPDATE_RECIPIENT_DETAILS_SUCCESS';
export const updateRecipientDetailsSuccess = recipient => ({
	type: UPDATE_RECIPIENT_DETAILS_SUCCESS,
	recipient
});

export const UPDATE_RECIPIENT_DETAILS_ERROR = 'UPDATE_RECIPIENT_DETAILS_ERROR';
export const updateRecipientDetailsError = error => ({
	type: UPDATE_RECIPIENT_DETAILS_ERROR,
	error
});

export const FETCHING_RECIPIENT_DETAILS = 'FETCHING_RECIPIENT_DETAILS';
export const fetchingRecipientDetails = () => ({
	type: FETCHING_RECIPIENT_DETAILS
});

export const FETCHING_RECIPIENT_DETAILS_SUCCESS =
	'FETCHING_RECIPIENT_DETAILS_SUCCESS';
export const fetchingRecipientDetailsSuccess = recipients => ({
	type: FETCHING_RECIPIENT_DETAILS_SUCCESS,
	recipients
});

export const FETCHING_RECIPIENT_DETAILS_ERROR =
	'FETCHING_RECIPIENT_DETAILS_ERROR';
export const fetchingRecipientDetailsError = error => ({
	type: FETCHING_RECIPIENT_DETAILS_ERROR,
	error
});

export const FETCH_RECIPIENT_DETAILS = 'FETCH_RECIPIENT_DETAILS';
export const fetchRecipientDetails = () => ({
	type: FETCH_RECIPIENT_DETAILS
});

export const FETCH_RECIPIENT_DETAILS_SUCCESS =
	'FETCH_RECIPIENT_DETAILS_SUCCESS';

export const fetchRecipientDetailsSuccess = recipient => ({
	type: FETCH_RECIPIENT_DETAILS_SUCCESS,
	recipient
});

export const FETCH_RECIPIENT_DETAILS_ERROR = 'FETCH_RECIPIENT_DETAILS_ERROR';
export const fetchRecipientDetailsError = error => ({
	type: FETCH_RECIPIENT_DETAILS_ERROR,
	error
});

export const DELETE_RECIPIENT_DETAILS = 'DELETE_RECIPIENT_DETAILS';
export const deleteRecipientDetails = recipient => ({
	type: DELETE_RECIPIENT_DETAILS,
	recipient
});

export const DELETE_RECIPIENT_DETAILS_SUCCESS =
	'DELETE_RECIPIENT_DETAILS_SUCCESS';
export const deleteRecipientDetailsSuccess = recipient => ({
	type: DELETE_RECIPIENT_DETAILS_SUCCESS,
	recipient
});

export const DELETE_RECIPIENT_DETAILS_ERROR = 'DELETE_RECIPIENT_DETAILS_ERROR';
export const deleteRecipientDetailsError = error => ({
	type: DELETE_RECIPIENT_DETAILS_ERROR,
	error
});

export const fetchAllRecipients = () => dispatch => {
	dispatch(fetchingRecipientDetails());
	let token = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/recipients`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(recipients => dispatch(fetchingRecipientDetailsSuccess(recipients)))
		.catch(err => dispatch(fetchingRecipientDetailsError(err)));
};

export const fetchRecipient = recipientId => dispatch => {
	dispatch(fetchRecipientDetails());
	let token = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/recipients/${recipientId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(recipient => {
			dispatch(fetchRecipientDetailsSuccess(recipient));
		})
		.catch(err => dispatch(fetchRecipientDetailsError(err)));
};

export const addRecipient = recipient => dispatch => {
	const token = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/recipients`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(recipient)
	})
		.then(res => res.json())
		.then(response => dispatch(addRecipientDetailsSuccess(response)))
		.catch(err => dispatch(addRecipientDetailsError(err)));
};

export const updateRecipient = recipient => dispatch => {
	const token = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/recipients/${recipient.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(recipient)
	})
		.then(res => res.json())
		.then(response => dispatch(updateRecipientDetailsSuccess(response)))
		.catch(err => dispatch(updateRecipientDetailsError(err)));
};

export const deleteRecipient = recipient => dispatch => {
	const token = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/recipients/${recipient.id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(recipient)
	})
		.then(res => res.json())
		.then(response => dispatch(deleteRecipientDetailsSuccess(response)))
		.catch(err => dispatch(deleteRecipientDetailsError(err)));
};
