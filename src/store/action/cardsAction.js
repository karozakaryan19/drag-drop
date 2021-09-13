import instance from '../../api/axiosInstance';
import { authActions, cardsAction } from '.';

import {
    SET_CARD,
    SET_CARD_ERROR,
    SET_CARD_STARTED,
    GET_CARDS,
    GET_CARDS_ERROR,
    GET_CARDS_STARTED,
    EDIT_CARD,
    EDIT_CARD_ERROR,
    EDIT_CARD_STARTED,
    REMOVE_CARD,
    REMOVE_CARD_ERROR,
    REMOVE_CARD_STARTED,
} from '../reducer/cardsReducer';

export const setCardError = (err) => ({
    type: SET_CARD_ERROR,
    payload: err,
});
export const setCardStarted = () => ({ type: SET_CARD_STARTED });
export const setCardFinished = (data) => ({ type: SET_CARD, payload: data });

export const getCardsError = (err) => ({
    type: GET_CARDS_ERROR,
    payload: err,
});
export const getCardsStarted = () => ({ type: GET_CARDS_STARTED });
export const getCardsFinished = (data) => ({ type: GET_CARDS, payload: data });

export const editCardError = (err) => ({
    type: EDIT_CARD_ERROR,
    payload: err,
});
export const editCardStarted = () => ({ type: EDIT_CARD_STARTED });
export const editCardFinished = (data) => ({ type: EDIT_CARD, payload: data });

export const removeCardError = (err) => ({
    type: REMOVE_CARD_ERROR,
    payload: err,
});
export const removeCardStarted = () => ({ type: REMOVE_CARD_STARTED });
export const removeCardFinished = (data) => ({ type: REMOVE_CARD, payload: data });



export const setCard = (card) => async (dispatch) => {
    try {
        dispatch(setCardStarted());
        const { data } = await instance.post('/cards/', card);
        dispatch(setCardFinished(data));
        dispatch(cardsAction.getCard());
    } catch (err) {
        if (err.response) {
            if (err.response.status === 401) {
                dispatch(authActions.expiredToken());
            }
            dispatch(setCardError(err.response.data));
        } else {
            dispatch(setCardError(err.message));
        }
    }
};



export const getCard = () => async (dispatch) => {
    try {
        dispatch(getCardsStarted());
        const { data } = await instance.get('/cards/');
        dispatch(getCardsFinished(data));
    } catch (err) {
        if (err.response) {
            dispatch(getCardsError(err.response.data));
        } else {
            dispatch(getCardsError(err.message));
        }
    }
};

export const editCard = (id, card) => async (dispatch) => {
    try {
        dispatch(editCardStarted());
        const { data } = await instance.patch(`/cards/${id}/`, card);
        dispatch(editCardFinished(data));
        dispatch(cardsAction.getCard());
    } catch (err) {
        if (err.response) {
            if (err.response.status === 401) {
                dispatch(authActions.expiredToken());
            }
            dispatch(editCardError(err.response.data));
        } else {
            dispatch(editCardError(err.message));
        }
    }
};

export const removeCard = (id) => async (dispatch) => {
    try {
        dispatch(removeCardStarted());
        const { data } = await instance.delete(`/cards/${id}/`);
        dispatch(removeCardFinished(data));
        dispatch(cardsAction.getCard());
    } catch (err) {
        if (err.response) {
            if (err.response.status === 401) {
                dispatch(authActions.expiredToken());
            }
            dispatch(removeCardError(err.response.data));
        } else {
            dispatch(removeCardError(err.message));
        }
    }
};