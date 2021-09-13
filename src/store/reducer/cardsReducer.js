export const SET_CARD = 'SET_CARD';
export const SET_CARD_ERROR = 'SET_CARD_ERROR';
export const SET_CARD_STARTED = 'SET_CARD_STARTED';
export const GET_CARDS = 'GET_CARDS';
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';
export const GET_CARDS_STARTED = 'GET_CARDS_STARTED';
export const EDIT_CARD = 'EDIT_CARD';
export const EDIT_CARD_ERROR = 'EDIT_CARD_ERROR';
export const EDIT_CARD_STARTED = 'EDIT_CARD_STARTED';
export const REMOVE_CARD = 'REMOVE_CARD';
export const REMOVE_CARD_ERROR = 'REMOVE_CARD_ERROR';
export const REMOVE_CARD_STARTED = 'REMOVE_CARD_STARTED';

const initialState = {
	dataList: [],
};
const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CARDS:
			return { ...state, dataList: payload };
		default:
			return state;
	}
};

export default authReducer;
