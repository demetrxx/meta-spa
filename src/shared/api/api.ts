import axios from 'axios';
import { ACCESS_TOKEN_LS_KEY } from 'shared/consts/localStorage';

const baseURL = __API_URL__;
export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(ACCESS_TOKEN_LS_KEY) || '',
  },
});
