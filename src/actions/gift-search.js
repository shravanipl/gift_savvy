import { GIFT_SEARCH_API_URL, GIFT_SEARCH_API_KEY, SECRET } from '../config';

export const SEARCH_GIFTS = 'SEARCH_GIFTS';
export const searchGifts = gifts => ({
	type: SEARCH_GIFTS
});

export const SEARCH_GIFTS_SUCCESS = 'SEARCH_GIFTS_SUCCESS';
export const searchGiftsSuccess = gifts => ({
	type: SEARCH_GIFTS_SUCCESS,
	gifts
});

export const SEARCH_GIFTS_ERROR = 'SEARCH_GIFTS_ERROR';
export const searchGiftsError = error => ({
	type: SEARCH_GIFTS_ERROR,
	error
});

export const callSearchGiftsAPI = input => dispatch => {
	const URL = `${GIFT_SEARCH_API_URL}`;
	dispatch(searchGifts());
	fetch(URL, {
		method: 'GET',
		headers: {
			'Content-type': 'application-json',
			authorization: `secret ${SECRET}`
		},
		data: {
			// apiKey: GIFT_SEARCH_API_KEY,
			// query: input.query,
			// country: 'us',
			// category: input.category,
			// itemsPerPage: 3
		}
	})
		.then(res => res.json)
		.then(gifts => dispatch(searchGiftsSuccess()))
		.catch(err => dispatch(searchGiftsError()));
};
