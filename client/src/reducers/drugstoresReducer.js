import {
  DRUGSTORES_GET_STARTED,
  DRUGSTORES_GET_FINISHED,
  DRUGSTORES_GET_ERROR,
  DRUGSTORE_DELETED
} from '../actions/drugstoresTypes';

export default (state = { drugstores: [] }, action) => {
  switch (action.type) {
  case DRUGSTORES_GET_STARTED:
    return { drugstores: [], isLoading: true, error: '' };
  case DRUGSTORES_GET_FINISHED:
    return { drugstores: action.payload, isLoading: false, error: '' };
  case DRUGSTORES_GET_ERROR:
    return {
      drugstores: [],
      isLoading: false,
      error: action.payload
    };
  case DRUGSTORE_DELETED:
    return {
      ...state,
      drugstores: state.drugstores.filter(
        item => item.drugstore_uid !== action.payload
      )
    };
  default:
    return state;
  }
};
