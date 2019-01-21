import {
	SEARCH_GIFTS,
	SEARCH_GIFTS_SUCCESS,
	SEARCH_GIFTS_ERROR
} from '../actions/gift-search';
const initialState = {
	gifts: [],
	isFetching: false,
	error: null
};

export const giftSearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_GIFTS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case SEARCH_GIFTS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				gifts: action.gifts
			});
		case SEARCH_GIFTS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		default:
			return state;
  }
};
