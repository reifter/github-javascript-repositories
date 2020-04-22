import axios from 'axios';
import { GET_REPOSITORIES } from './constants';
import dateMonthAgo from '../../../common/utils/dateMonthAgo';

export const getRepositoriesRequest = async (page=0, query=null) => {
  const params = `?q=${((query) ? query + '+in:name+' : '')}language:javascript+created:>=${dateMonthAgo()}&sort=stars&sort=desc&page=${page}&per_page=10`;
  const response = await axios.get(GET_REPOSITORIES + params);
  return response && response.data;
};
