import { call, takeEvery, put } from 'redux-saga/effects';
import { getLicensesRequest } from '../../api/getLicensesRequest';
import { GET_LICENSES } from '../actions/types';
import {
  getLicensesSuccess,
  getLicensesError
} from '../actions';

function* getLicensesSaga() {
  try {
    const response = yield call(getLicensesRequest);
    console.log('response', response);
    yield put(getLicensesSuccess({data: response}));
  } catch (e) {
    yield put(getLicensesError(e));
  }
}

export function* licensesWatcher() {
  yield takeEvery(
    GET_LICENSES,
    getLicensesSaga
  );
}
