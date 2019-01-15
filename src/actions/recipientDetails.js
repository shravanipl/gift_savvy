import { API_BASE_URL } from '../config.js';
import { loadAuthToken } from '../local-storage';

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
	type: FETCHING_RECIPIENT_DETAILS_ERROR,
	error
});

export const fetchRecipients = () => dispatch => {
  const token = loadAuthToken();
	fetch(`${API_BASE_URL}/recipient`, {
		method: 'GET',
		headers: {
      'Content-type': 'application/json',
      'Authorisation': `Bearer ${token}`
		}
	})
		.then(res => res.json)
		.then(recipients => {
			dispatch(fetchingRecipientDetailsSuccess()).catch(err =>
				dispatch(fetchingRecipientDetailsError())
			);
		});
};

export const addRecipient = recipient => dispatch=> {
  const token = loadAuthToken();
  fetch(`${API_BASE_URL}/recipient/${recipient.id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application-json',
      Authorisation: `Bearer ${token}`
    },
    body: JSON.stringify({ recipient })
  })
    .then(res => res.json)
    .then(response => dispatch(addRecipientDetailsSuccess()))
    .catch(err => dispatch(addRecipientDetailsError()));
}

export const updateRecipient = recipient => dispatch => {
	const token = loadAuthToken();
	fetch(`${API_BASE_URL}/recipient/${recipient.id}`, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json',
			Authorisation: `Bearer ${token}`
		},
		body: JSON.stringify({})
	})
		.then(res => res.json)
		.then(response => dispatch(updateRecipientDetailsSuccess()))
		.catch(err => dispatch(updateRecipientDetailsError()));
};

export const deleteRecipient = recipient => dispatch => {
  const token = loadAuthToken();
  fetch(`${API_BASE_URL}/recipient/${recipient.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorisation: `Bearer ${token}`
    },
    body: JSON.stringify(recipient)
  })
    .then(res => res.json)
    .then(response => dispatch(deleteRecipientDetailsSuccess()))
    .catch(err => dispatch(deleteRecipientDetailsError()));
}