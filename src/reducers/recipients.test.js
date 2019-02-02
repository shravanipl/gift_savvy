import { recipientReducer } from './recipients';

import {
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

describe('recipientreducer', () => {
	describe('recipientReducer', () => {
		// dummy data
		const gift1 = {
			name: 'Som',
			price: 12
		};
		const gift2 = {
			name: 'Somwq',
			price: 121
		};

		it('Should set the initial state when nothing is passed in', () => {
			const state = recipientReducer(undefined, { type: '__UNKNOWN' });
			expect(state).toEqual({
				recipient: '',
				recipients: '',
				isFetching: false,
				error: null
			});
		});

		it('Should return the current state on an unknown action', () => {
			let currentState = {};
			const state = recipientReducer(currentState, { type: '__UNKNOWN' });
			expect(state).toBe(currentState);
		});

		describe('Add new recipient', () => {
			it('handle request action', () => {
				let state;
				state = recipientReducer(state, addRecipientDetails());
				expect(state.isFetching).toEqual(true);
			});
			it('handle success action', () => {
				let state;
				state = recipientReducer(state, addRecipientDetailsSuccess(gift1));
				expect(state.error).toEqual(null);
				expect(state.isFetching).toEqual(false);
			});
			it('handle error action', () => {
				let state;
				state = recipientReducer(state, addRecipientDetailsError('err'));
				expect(state.error).toEqual('err');
				// expect(state.isFetching).toEqual(false);
			});
		});

		describe('Get recipient', () => {
			it('handle request action', () => {
				let state;
				state = recipientReducer(state, fetchRecipientDetails());
				expect(state.isFetching).toEqual(true);
			});
			it('handle success action', () => {
				let state;
				state = recipientReducer(state, fetchRecipientDetailsSuccess(gift2));
				expect(state.recipient).toEqual(gift2);
				expect(state.error).toEqual(null);
				expect(state.isFetching).toEqual(false);
			});
			it('handle error action', () => {
				let state;
				state = recipientReducer(state, fetchingRecipientDetailsError('err'));
				expect(state.error).toEqual('err');
				expect(state.isFetching).toEqual(false);
			});
		});

		describe('Get all recipients', () => {
			it('handle request action', () => {
				let state;
				state = recipientReducer(state, fetchingRecipientDetails());
				expect(state.isFetching).toEqual(true);
			});
			it('handle success action', () => {
				let state;
				let gifts = [gift1, gift2];
				state = recipientReducer(state, fetchingRecipientDetailsSuccess(gifts));
				expect(state.recipients).toEqual(gifts);
				expect(state.error).toEqual(null);
				expect(state.isFetching).toEqual(false);
			});
			it('handle error action', () => {
				let state;
				state = recipientReducer(state, fetchingRecipientDetailsError('err'));
				expect(state.error).toEqual('err');
				expect(state.isFetching).toEqual(false);
			});
		});

		describe('Update recipient', () => {
			it('handle request action', () => {
				let state;
				state = recipientReducer(state, updateRecipientDetails());
				expect(state.isFetching).toEqual(true);
			});
			it('handle success action', () => {
				let state;
				state = recipientReducer(state, updateRecipientDetailsSuccess(gift2));
				expect(state.error).toEqual(null);
				expect(state.isFetching).toEqual(false);
			});
			it('handle error action', () => {
				let state;
				state = recipientReducer(state, updateRecipientDetailsError('err'));
				expect(state.error).toEqual('err');
				expect(state.isFetching).toEqual(false);
			});
		});

		describe('Delete recipient', () => {
			it('handle request action', () => {
				let state;
				state = recipientReducer(state, deleteRecipientDetails());
				expect(state.isFetching).toEqual(true);
			});
			it('handle success action', () => {
				let state;

				state = recipientReducer(state, deleteRecipientDetailsSuccess());
				expect(state.error).toEqual(null);
				expect(state.isFetching).toEqual(false);
			});
			it('handle error action', () => {
				let state;
				state = recipientReducer(state, deleteRecipientDetailsError('err'));
				expect(state.error).toEqual('err');
				expect(state.isFetching).toEqual(false);
			});
		});
	});
});
