import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_ERROR,
  SET_FILTERS,
} from '../actions/types';

const initialState = {};

export function repositories(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    case GET_REPOSITORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        }
      };
    default:
      return state
  }
}
