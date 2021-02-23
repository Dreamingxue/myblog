import { axios } from './axios';
import qs from 'querystring';

export const searchArticle = (data) => {
  return axios.get('/article/search', qs.stringify(data));
}
