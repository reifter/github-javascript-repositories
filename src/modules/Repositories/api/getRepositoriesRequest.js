import axios from 'axios';
import { GET_REPOSITORIES } from './constants';
import dateMonthAgo from '../../../common/utils/dateMonthAgo';

export const getRepositoriesRequest = async (options = {}) => {
  const optionsDefault = {
    page: 1,
    perPage: 10,
    sort: 'stars',
    order: 'desc',
    language: 'javascript',
    created: `>=${dateMonthAgo()}`,
    query: '',
    license: '',
  };
  const newOptions = {...optionsDefault, ...options};
  const params = [
    '?q=' + [
      (newOptions.query) ? newOptions.query + '+in:name' : '',
      'language:' + newOptions.language,
      'created:' + newOptions.created,
      (newOptions.license && newOptions.license !== 'all') ? 'license:' + newOptions.license : '',
    ].filter(item => item).join('+'),
    'sort=' + newOptions.sort,
    'order=' + newOptions.order,
    'page=' + newOptions.page,
    'per_page=' + newOptions.perPage,
  ].join('&');

  const response = await axios.get(GET_REPOSITORIES + params);
  return response && response.data;
};
