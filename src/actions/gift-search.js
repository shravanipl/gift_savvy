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

export const callSearchGiftsAPI = inputs => dispatch => {
	dispatch(searchGifts());
	let url = new URL(GIFT_SEARCH_API_URL),
		params = {
			apiKey: GIFT_SEARCH_API_KEY,
			query: inputs.item,
			country: 'us'
		};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    console.log(url);

	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `secret ${SECRET}`
		}
	})
		.then(res => {
			console.log('result');
			return res.json();
		})
        .then(response => {
            console.log(response);

            dispatch(searchGiftsSuccess(response.items));
		})
		.catch(err => dispatch(searchGiftsError(err)));
};
