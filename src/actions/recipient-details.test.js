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
	DELETE_RECIPIENT_DETAILS_ERROR,
	addRecipientDetails,
	addRecipientDetailsSuccess,
	addRecipientDetailsError,
	updateRecipientDetails,
	updateRecipientDetailsError,
	updateRecipientDetailsSuccess,
	fetchingRecipientDetails,
	fetchingRecipientDetailsError,
	fetchingRecipientDetailsSuccess,
	fetchRecipientDetails,
	fetchRecipientDetailsError,
	fetchRecipientDetailsSuccess,
	deleteRecipientDetails,
	deleteRecipientDetailsError,
	deleteRecipientDetailsSuccess
} from '../actions/recipient-details';

describe('RecipientDetails Actions', () => {
	// Create new expense actions
	it('should return the addRecipientDetails() action', () => {
		const action = addRecipientDetails();
		expect(action.type).toEqual(ADD_RECIPIENT_DETAILS);
	});
	it('should return the addRecipientDetailsSuccess action', () => {
		const recipient = 'newRecipient';
		const action = addRecipientDetailsSuccess(recipient);
		expect(action.type).toEqual(ADD_RECIPIENT_DETAILS_SUCCESS);
		expect(action.newRecipient).toEqual(recipient);
	});
	it('should return the createExpenseError action', () => {
		const err = 'oops';
		const action = addRecipientDetailsError(err);
		expect(action.type).toEqual(ADD_RECIPIENT_DETAILS_ERROR);
		expect(action.error).toEqual(err);
	});
	// Fetch Expense by id actions
	it('should return the fetchRecipientDetails() action', () => {
		const action = fetchRecipientDetails();
		expect(action.type).toEqual(FETCH_RECIPIENT_DETAILS);
	});
	it('should return the fetchRecipientDetailsSuccess action', () => {
		const data = {};
		const action = fetchRecipientDetailsSuccess(data);
		expect(action.type).toEqual(FETCH_RECIPIENT_DETAILS_SUCCESS);
		expect(action.recipient).toEqual(data);
	});
	it('should return the fetchRecipientDetailsError action', () => {
		const err = 'oops';
		const action = fetchRecipientDetailsError(err);
		expect(action.type).toEqual(FETCH_RECIPIENT_DETAILS_ERROR);
		expect(action.error).toEqual(err);
	});
	// Fetch rentals actions
	it('should return the fetchingRecipientDetails() action', () => {
		const action = fetchingRecipientDetails();
		expect(action.type).toEqual(FETCHING_RECIPIENT_DETAILS);
	});
	it('should return the fetchingRecipientDetailsSuccess action', () => {
		const data = {};
		const action = fetchingRecipientDetailsSuccess(data);
		expect(action.type).toEqual(FETCHING_RECIPIENT_DETAILS_SUCCESS);
		expect(action.recipients).toEqual(data);
	});
	it('should return the fetchingRecipientDetailsError action', () => {
		const err = 'oops';
		const action = fetchingRecipientDetailsError(err);
		expect(action.type).toEqual(FETCHING_RECIPIENT_DETAILS_ERROR);
		expect(action.error).toEqual(err);
	});
	// Update expenses by id actions
	it('should return the updateRecipientDetails() action', () => {
		const action = updateRecipientDetails();
		expect(action.type).toEqual(UPDATE_RECIPIENT_DETAILS);
	});
	it('should return the updateRecipientDetailsSuccess action', () => {
		const data = {};
		const action = updateRecipientDetailsSuccess(data);
		expect(action.type).toEqual(UPDATE_RECIPIENT_DETAILS_SUCCESS);
    expect(action.recipient).toEqual(data);
	});
	it('should return the updateRecipientDetailsError action', () => {
		const err = 'oops';
		const action = updateRecipientDetailsError(err);
		expect(action.type).toEqual(UPDATE_RECIPIENT_DETAILS_ERROR);
		expect(action.error).toEqual(err);
	});
	// Delete expense by id actions
	it('should return the deleteRecipientDetails() action', () => {
		const action = deleteRecipientDetails();
		expect(action.type).toEqual(DELETE_RECIPIENT_DETAILS);
	});
	it('should return the deleteRecipientDetailsSuccess action', () => {
		const data = {};
		const action = deleteRecipientDetailsSuccess(data);
		expect(action.type).toEqual(DELETE_RECIPIENT_DETAILS_SUCCESS);
		expect(action.recipient).toEqual(data);
	});
	it('should return the deleteRecipientDetailsError action', () => {
		const err = 'oops';
		const action = deleteRecipientDetailsError(err);
		expect(action.type).toEqual(DELETE_RECIPIENT_DETAILS_ERROR);
		expect(action.error).toEqual(err);
	});
});
