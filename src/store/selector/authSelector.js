import { createSelector } from 'reselect'

export const selectState = (state) => state.authReducer

export const token = createSelector(selectState, (state => state.token))

export const errMessageRequst = createSelector(selectState, (state => state.errMessageRequst))

