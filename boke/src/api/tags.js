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
};

export const addTag = async (tag) => {
  const { data } = await axios.post('/tags/add', tag);
  return data;
};

export const updateTag = async (tag) => {
  const { data } = await axios.post('/tags/update', tag);
  return data;
};

export const deleteTag = async (tag) => {
  const { data } = await axios.post('/tags/delete', qs.stringify({id: tagId}));
  return data;
};
