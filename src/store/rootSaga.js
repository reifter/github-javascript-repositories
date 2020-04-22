import { fork } from 'redux-saga/effects';
import repositories from '../modules/Repositories/redux/sagas';

export default function*() {
  yield fork(repositories);
}
