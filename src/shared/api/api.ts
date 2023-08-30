import axios from 'axios';
import { USER_LS_KEY } from 'shared/consts/localStorage';

const baseURL = __API_URL__;
export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LS_KEY) || '',
  },
});
