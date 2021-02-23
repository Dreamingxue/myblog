import { axios } from './axios';
import qs from 'querystring';

/**
 * 用户登录
 * @param data
 * @returns {AxiosPromise}
 */
export const login = (data) => {
  return axios.post('/user/login', qs.stringify(data));
}

/**
 * 用户注册
 * @param data
 * @returns {AxiosPromise}
 */
export const registerUser = (data) => {
  return axios.post('/user/register', data);
}

/**
 * 更新用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export const updateUser = (data) => {
  return axios.post('/user/update', data);
}

/**
 * 更新密码
 * @param id
 * @param oldPassword
 * @param newPassword
 * @returns {AxiosPromise}
 */
export const updatePwd = (id, oldPassword, newPassword) => {
  return axios.post('/user/update', qs.stringify({id, oldPassword, newPassword}));
}
