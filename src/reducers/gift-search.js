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
				gifts: action.gifts,
				isFetching: false
			});
		case SEARCH_GIFTS_ERROR:
			return Object.assign({}, state, {
				error: action.error,
				isFetching: false
			});
		default:
			return state;
  }
};
