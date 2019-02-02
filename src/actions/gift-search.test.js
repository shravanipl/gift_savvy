import {
	SEARCH_GIFTS,
	SEARCH_GIFTS_SUCCESS,
	SEARCH_GIFTS_ERROR,
	searchGifts,
	searchGiftsSuccess,
	searchGiftsError
} from '../actions/gift-search';

describe('Gift Search actions', () => {
	it('should return searchgifts action', () => {
		const action = searchGifts();
		expect(action.type).toEqual(SEARCH_GIFTS);
	});
	it('should return searchGiftsSuccess action', () => {
		const data = {};
		const action = searchGiftsSuccess(data);
		expect(action.type).toEqual(SEARCH_GIFTS_SUCCESS);
		expect(action.gifts).toEqual(data);
	});
  it('should return searchGiftsSuccess action', () => {
    const err = "error";
    const action = searchGiftsError(err);
    expect(action.type).toEqual(SEARCH_GIFTS_ERROR);
    expect(action.error).toEqual(err);
  });
});
