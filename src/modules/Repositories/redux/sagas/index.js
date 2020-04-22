import { fork } from 'redux-saga/effects';
import { repositoriesWatcher } from './repositoriesSagas';

export default function* repositories() {
  yield fork(repositoriesWatcher);
}
