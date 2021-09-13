import { paths } from '../../routes/paths';
import instance from '../../api/axiosInstance';

import {
	SET_USER,
	SET_USER_ERROR,
	SET_USER_STARTED,
	GET_USER,
	GET_USER_ERROR,
	GET_USER_STARTED,
} from '../reducer/authReducer';

export const signupError = (err) => ({
	type: SET_USER_ERROR,
	payload: err,
});
export const signupStarted = () => ({ type: SET_USER_STARTED });
export const signupFinished = (data) => ({ type: SET_USER, payload: data });

export const signinError = (err) => ({
	type: GET_USER_ERROR,
	payload: err,
});
export const signinStarted = () => ({ type: GET_USER_STARTED });
export const signinFinished = (data) => ({ type: GET_USER, payload: data });

export const signup = (user, history) => async (dispatch) => {
	try {
		dispatch(signupStarted());
		const { data } = await instance.post('/users/create/', user);
		dispatch(signupFinished(data.token));
		history.push(paths.signIn);
	} catch (err) {
		if (err.response) {
			dispatch(signupError(err.response.data));

		} else {
			dispatch(signupError(err.message));
		}
	}
};

export const signin = (user, history) => async (dispatch) => {
	try {
		dispatch(signinStarted());
		const { data } = await instance.post("/users/login/", user);
		dispatch(signinFinished(data.token));
		window.localStorage.setItem("accessToken", data.token);
		history.push(paths.dashboard);

	} catch (err) {
		if (err.response) {
			dispatch(signinError(err.response.data));
		} else {
			dispatch(signinError(err.message));
		}
	}
};

