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
/**
 * 根据id 获取文章详情
 * @param id
 * @returns {Promise<any>}
 */
export const getArticle = async (id) => {
  const { data } = await axios.get('/article/get', qs.stringify({id}));
  return data;
}

/**
 * 添加文章
 * @param article
 * @returns {Promise<>}
 */
export const addArticle = async (article) => {
  const { data } = await axios.post('/article/addArticle', article);
  return data;
}

/**
 * 根据id 更新文章
 * @param article
 * @returns {Promise<>}
 */
export const updateArticle = async (article) => {
  const { data } = await axios.post('/article/updateArticle', article);
  return data;
}
