import {
	FETCHING_RECIPIENT_DETAILS,
	FETCHING_RECIPIENT_DETAILS_SUCCESS,
	FETCHING_RECIPIENT_DETAILS_ERROR,
	FETCH_RECIPIENT_DETAILS,
	FETCH_RECIPIENT_DETAILS_SUCCESS,
	FETCH_RECIPIENT_DETAILS_ERROR,
	ADD_RECIPIENT_DETAILS,
	ADD_RECIPIENT_DETAILS_SUCCESS,
	ADD_RECIPIENT_DETAILS_ERROR,
	UPDATE_RECIPIENT_DETAILS,
	UPDATE_RECIPIENT_DETAILS_SUCCESS,
	UPDATE_RECIPIENT_DETAILS_ERROR,
	DELETE_RECIPIENT_DETAILS,
	DELETE_RECIPIENT_DETAILS_SUCCESS,
	DELETE_RECIPIENT_DETAILS_ERROR
} from '../actions/recipient-details';

const initialState = {
	recipient: '',
	recipients:'',
	isFetching: false,
	error: null
};

export const recipientReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_RECIPIENT_DETAILS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case FETCHING_RECIPIENT_DETAILS_SUCCESS:
   		return Object.assign({}, state, {
				isFetching: false,
				recipients: action.recipients
			});
		case FETCHING_RECIPIENT_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		case FETCH_RECIPIENT_DETAILS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case FETCH_RECIPIENT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				recipient: action.recipient
			});
		case FETCH_RECIPIENT_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		case ADD_RECIPIENT_DETAILS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case ADD_RECIPIENT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				recipients: [...state.recipients, action.recipient]
			});
		case ADD_RECIPIENT_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		case UPDATE_RECIPIENT_DETAILS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case UPDATE_RECIPIENT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				recipients: action.recipient
			});
		case UPDATE_RECIPIENT_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		case DELETE_RECIPIENT_DETAILS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case DELETE_RECIPIENT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				recipients: action.recipient
			});
		case DELETE_RECIPIENT_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		default:
			return state;
	}
};
