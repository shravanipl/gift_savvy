import { giftSearchReducer } from './gift-search';

describe('giftSearchReducer', () => {
	it('should return initial state when nothing is passed in', () => {
		const state = giftSearchReducer(undefined, { type: '_UNKNOWN' });
		expect(state).toEqual({
			gifts: [],
			isFetching: false,
			error: null
		});
	});

	it('should return the current state on an unknown action', () => {
		let currentState = {};
		const state = giftSearchReducer(currentState, { type: '_UNKNOWN' });
		expect(state).toEqual(currentState);
	});

	it('should return state with isFetching true and error null', () => {
		let currentState = {
			isFetching: false,
			error: null
		};
		const state = giftSearchReducer(currentState, { type: 'SEARCH_GIFTS' });
		expect(state).toEqual({
			isFetching: true,
			error: null
		});
	});

	it('should return state with isFetching false and error', () => {
		let currentState = {
			isFetching: false,
			error: 'err'
		};
		const state = giftSearchReducer(currentState, {
			type: 'SEARCH_GIFTS_ERROR',
			error: 'err'
		});
		expect(state).toEqual({
			isFetching: false,
			error: 'err'
		});
	});
	it('should return state with isFetching false and data', () => {
		let currentState = {
			isFetching: false,
			gifts: []
		};
		const state = giftSearchReducer(currentState, {
			type: 'SEARCH_GIFTS_SUCCESS',
			gifts: [
				{
					name: 'phone',
					price: '12'
				}
			]
		});
		expect(state).toEqual({
			isFetching: false,
			gifts: [
				{
					name: 'phone',
					price: '12'
				}
			]
		});
	});
});
