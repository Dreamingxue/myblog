import { axios, ApiUrl } from './axios';
import qs from 'querystring';


export const login = (data) => {
  return axios.post(ApiUrl + '/user/login', qs.stringify(data));
}
