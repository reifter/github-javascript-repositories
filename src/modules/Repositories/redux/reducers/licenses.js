import {
  GET_LICENSES,
  GET_LICENSES_SUCCESS,
  GET_LICENSES_ERROR,
} from '../actions/types';

const initialState = {};

export function licenses(state = initialState, action) {
  switch (action.type) {
    case GET_LICENSES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LICENSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    case GET_LICENSES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state
  }
}
