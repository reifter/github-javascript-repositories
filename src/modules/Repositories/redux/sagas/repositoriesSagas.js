import { call, takeLatest, put, debounce } from 'redux-saga/effects';
import { getRepositoriesRequest } from '../../api/getRepositoriesRequest';
import { GET_REPOSITORIES, SEARCH_REPOSITORIES } from '../actions/types';
import {
  getRepositoriesSuccess,
  getRepositoriesError,
  setFilters,
} from '../actions';

function* getRepositoriesSaga(action) {
  try {
    const response = yield call(getRepositoriesRequest, action.payload);
    console.log('response', response);
    yield put(getRepositoriesSuccess({
      total: response.total_count,
      data: response.items,
    }));
  } catch (e) {
    yield put(getRepositoriesError(e));
  }
}

function* searchRepositoriesSaga(action) {
  yield put(setFilters({
    query: action.payload,
    page: null,
  }));
}

export function* repositoriesWatcher() {
  yield takeLatest(
    GET_REPOSITORIES,
    getRepositoriesSaga
  );
  yield debounce(
    600,
    [
      SEARCH_REPOSITORIES,
    ],
    searchRepositoriesSaga
  );
  
  
}