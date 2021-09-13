import { combineReducers } from 'redux'
import authReducer from './authReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({ authReducer, cardsReducer });

export default rootReducer;
