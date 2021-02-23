import { axios } from './axios';
import qs from 'querystring';


export const login = (data) => {
  return axios.post('/user/login', qs.stringify(data));
}
