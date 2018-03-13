import axios from 'axios';
import { signoutUser } from './authActions';

import {
  PRICE_FIND_STARTED,
  PRICE_FIND_FINISHED,
  PRICE_FIND_ERROR,
  PRICE_FIND_RESET
} from './priceTypes';

export const priceError = error => {
  return {
    type: PRICE_FIND_ERROR,
    payload: error
  };
};

export const findPrices = queryString => dispatch => {
  if (queryString === '') {
    return dispatch({ type: PRICE_FIND_RESET });
  }
  dispatch({ type: PRICE_FIND_STARTED });

  const authData = { authorization: localStorage.getItem('token') };
  axios
    .get('/api/price', { headers: authData, params: { queryString } })
    .then(response => {
      return dispatch({
        type: PRICE_FIND_FINISHED,
        payload: response.data.result
      });
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        return dispatch(priceError(error.response.data.result));
      }
      if (error.response && error.response.status === 401) {
        dispatch({ type: PRICE_FIND_RESET });
        return dispatch(signoutUser());
      }
      return dispatch(priceError('Внутренняя ошибка сервера!'));
    });
};
