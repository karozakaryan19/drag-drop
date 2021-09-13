import { createSelector } from 'reselect'

export const selectState = (state) => state.cardsReducer

export const dataList = createSelector(selectState, (state => state.dataList))

