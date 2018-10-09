import {
  PRICE_FIND_STARTED,
  PRICE_FIND_FINISHED,
  PRICE_FIND_ERROR,
  PRICE_FIND_RESET
} from '../actions/priceTypes';

export default (state = { finded_prices: [] }, action) => {
  switch (action.type) {
  case PRICE_FIND_STARTED:
    return { ...state, finded_prices: [], isLoading: true, error: '' };
  case PRICE_FIND_FINISHED:
    return { ...state, finded_prices: action.payload, isLoading: false };
  case PRICE_FIND_RESET:
    return { ...state, finded_prices: [], isLoading: false, error: '' };
  case PRICE_FIND_ERROR:
    return {
      ...state,
      finded_prices: [],
      isLoading: false,
      error: action.payload
    };
  default:
    return state;
  }
};
