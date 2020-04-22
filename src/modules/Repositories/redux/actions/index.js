import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_ERROR,
} from './types';

export const getRepositories = payload => ({
  type: GET_REPOSITORIES,
  payload,
});

export const getRepositoriesSuccess = payload => ({
  type: GET_REPOSITORIES_SUCCESS,
  payload,
});

export const getRepositoriesError = payload => ({
  type: GET_REPOSITORIES_ERROR,
  payload,
});
