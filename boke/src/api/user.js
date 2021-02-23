import { axios } from './axios';
import qs from 'querystring';

/**
 * 用户登录
 * @param
 * @returns {}
 */
export const login = async (params) => {
  const { data } = await axios.post('/user/login', qs.stringify(params));
  return data;
}

/**
 * 用户注册
 * @param
 * @returns {}
 */
export const registerUser = async (user) => {
  const { data } = await axios.post('/user/register', user);
  return data;
}

/**
 * 更新用户信息
 * @param user
 * @returns {AxiosPromise}
 */
export const updateUser = async (user) => {
  const { data } = await axios.post('/user/update', user);
  return data;
}

/**
 * 更新密码
 * @param id
 * @param oldPassword
 * @param newPassword
 * @returns {}
 */
export const updatePwd = async (id, oldPassword, newPassword) => {
  const { data } = await axios.post('/user/update', qs.stringify({id, oldPassword, newPassword}));
  return data;
}
