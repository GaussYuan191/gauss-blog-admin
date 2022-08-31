import { Modal } from 'antd';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { API_ROOT } from './config';
import { getToken, isLogin } from './tools';
const LOGIN_PATH = 'user/login';
const { confirm } = Modal;
export const http = axios.create({
  baseURL: API_ROOT,
  timeout: 1000,
});

/** 请求拦截器 */
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.Authorization = `Naice ${getToken()}` || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/** 响应拦截器 */
http.interceptors.response.use(
  (response: AxiosResponse<any>): any | Promise<AxiosResponse<any>> => {
    console.log('请求返回', response);
    if (response.config.url !== LOGIN_PATH && !isLogin()) {
      confirm({
        title: '提示!',
        content: '用户信息已过期，请点击确定后重新登录。',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          window.location.href = '/login';
        },
      });
    }
    const { data } = response;
    if (data.code == 0) {
      return Promise.reject(data.message);
    } else {
      return response;
    }
  },
  (error: any) => {
    if (!isLogin()) {
      confirm({
        title: '提示!',
        content: '用户信息已过期，请点击确定后重新登录。',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          window.location.href = '/login';
        },
      });
    }
    console.log('请求失败', error);
    return Promise.reject(error);
  },
);
