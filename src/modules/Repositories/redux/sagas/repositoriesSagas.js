import { call, takeEvery, put } from 'redux-saga/effects';
import { getRepositoriesRequest } from '../../api/getRepositoriesRequest';
import { GET_REPOSITORIES } from '../actions/types';
import {
  getRepositoriesSuccess,
  getRepositoriesError
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

export function* repositoriesWatcher() {
  yield takeEvery(
    GET_REPOSITORIES,
    getRepositoriesSaga
  );
}
