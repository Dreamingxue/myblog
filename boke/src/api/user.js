import { axios } from './axios';
import qs from 'querystring';


export const login = (url, data) => {
  return axios.post(url, qs.stringify(data));
}
