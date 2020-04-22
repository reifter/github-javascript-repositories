import axios from 'axios';
import { GET_LICENSES } from './constants';

export const getLicensesRequest = async () => {
  const response = await axios.get(GET_LICENSES);
  return response && response.data;
};
