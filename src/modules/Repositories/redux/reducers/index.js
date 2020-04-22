import { combineReducers } from 'redux';
import { repositories as list } from './repositories';
import { licenses } from './licenses';

export const Repositories = combineReducers({
  list,
  licenses,
});
