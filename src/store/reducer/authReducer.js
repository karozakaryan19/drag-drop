export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_USER_STARTED = 'SET_USER_STARTED';
export const GET_USER = 'SET_USER';
export const GET_USER_ERROR = 'SET_USER_ERROR';
export const GET_USER_STARTED = 'SET_USER_STARTED';

const initialState = {
	token: '',
	errMessageRequst: {},
};
const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_USER:
			return { ...state, token: payload };
		case SET_USER_ERROR:
			return { ...state, errMessageRequst: payload };
		case GET_USER:
			return { ...state, token: payload };
		case GET_USER_ERROR:
			return { ...state, errMessageRequst: payload };
		default:
			return state;
	}
};

export default authReducer;
