import axios from 'axios';
import { getApiToken, getApiUrl } from '@table2night/utils/commonUtils';

const apiUrl = getApiUrl();

export const apiClient = axios.create({
  baseURL: apiUrl,
  params: {
    dbs_psswd: getApiToken(),
  },
  headers: {
    'Content-type': 'application/json',
  },
});
