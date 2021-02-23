import { axios } from './axios';
import qs from 'querystring';

/**
 * 搜索文章
 * @param params: {keyWords: string, author: String}
 * @returns
 */
export const searchArticle = async (params) => {
  const { data } = await axios.get('/article/search', qs.stringify(params));
  return data;
}
