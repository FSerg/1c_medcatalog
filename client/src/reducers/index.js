import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import priceReducer from './priceReducer';
import drugstoresReducer from './drugstoresReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  auth: authReducer,
  usersStore: usersReducer,
  priceStore: priceReducer,
  drugstoresStore: drugstoresReducer,
  modal: modalReducer
});
