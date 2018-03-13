import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import priceReducer from './priceReducer';

export default combineReducers({
  auth: authReducer,
  usersStore: usersReducer,
  priceStore: priceReducer
});
