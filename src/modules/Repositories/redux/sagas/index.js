import { fork } from 'redux-saga/effects';
import { repositoriesWatcher } from './repositoriesSagas';
import { licensesWatcher } from './licensesSagas';

export default function* repositories() {
  yield fork(repositoriesWatcher);
  yield fork(licensesWatcher);
}
