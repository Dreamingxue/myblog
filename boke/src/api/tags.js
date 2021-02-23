import { axios } from './axios';
import qs from 'querystring';

/**
 *
 * @param params
 * @returns {Promise<any>}
 */
export const searchTags = async (params) => {
  const { data } = await axios.get('/tags/search', qs.stringify(params));
  return data;
}
