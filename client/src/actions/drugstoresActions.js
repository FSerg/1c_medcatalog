import axios from 'axios';

import {
  DRUGSTORES_GET_STARTED,
  DRUGSTORES_GET_FINISHED,
  DRUGSTORES_GET_ERROR,
  DRUGSTORE_DELETED
} from './drugstoresTypes';

export const drugstoresError = error => {
  return {
    type: DRUGSTORES_GET_ERROR,
    payload: error
  };
};

export const getDrugstores = () => dispatch => {
  dispatch({ type: DRUGSTORES_GET_STARTED });

  const authData = { authorization: localStorage.getItem('token') };
  axios
    .get('/api/drugstore/all', { headers: authData })
    .then(response => {
      return dispatch({
        type: DRUGSTORES_GET_FINISHED,
        payload: response.data.result
      });
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        return dispatch(drugstoresError(error.response.data.result));
      }
      if (error.response && error.response.status === 401) {
        return dispatch(drugstoresError('Ошибка авторизации пользователя'));
      }
      return dispatch(drugstoresError('Внутренняя ошибка сервера!'));
    });
};

export const delDrugstore = drugstore_uid => dispatch => {
  const authData = { authorization: localStorage.getItem('token') };
  axios
    .delete('/api/drugstore', { headers: authData, params: { drugstore_uid } })
    .then(() => {
      return dispatch({
        type: DRUGSTORE_DELETED,
        payload: drugstore_uid
      });
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        return dispatch(drugstoresError(error.response.data.result));
      }
      if (error.response && error.response.status === 401) {
        return dispatch(drugstoresError('Ошибка авторизации пользователя'));
      }
      return dispatch(drugstoresError('Внутренняя ошибка сервера!'));
    });
};
