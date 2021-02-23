import { axios } from './axios';
import qs from 'querystring';

export const searchTags = (data) => {
  return axios.get('/tags/search', qs.stringify(data));
}
