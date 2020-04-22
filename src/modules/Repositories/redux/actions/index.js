import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_ERROR,
  GET_LICENSES,
  GET_LICENSES_SUCCESS,
  GET_LICENSES_ERROR,
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

export const getLicenses = payload => ({
  type: GET_LICENSES,
  payload,
});

export const getLicensesSuccess = payload => ({
  type: GET_LICENSES_SUCCESS,
  payload,
});

export const getLicensesError = payload => ({
  type: GET_LICENSES_ERROR,
  payload,
});
