import axios from 'axios';
import { message, notification } from 'antd';

export type AxiosErrorHandler = (status, msg, error?) => void;
export type LoginRedirectUrlFn = () => string;

const errorHandler: AxiosErrorHandler = (status, msg) => {
  notification.error({
    message: '请求异常',
    description: (
      <>
        <p>status：{status}</p>
        {message && <p>message: {msg}</p>}
      </>
    ),
  });
};

export function initAxios() {
  axios.defaults.withCredentials = true;
  // Add a request interceptor
  axios.interceptors.request.use(
    config => {
      const bizId = Number(window.localStorage.bizId);
      config.params = {
        bizId,
        ...config.params,
      };
      return config;
    },
    error => Promise.reject(error)
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    response => {
      const res = response.data;
      if (res.code && String(res.code) !== '200') {
        message.error(`错误: ${res?.msg}`);
        return Promise.reject(response);
      }
      return response;
    },
    error => {
      if (axios.isCancel(error)) {
        throw error;
      }
      const res = error.response;
      if (res?.status === 401) {
        // 未登录
      }
      setTimeout(() => {
        if (!error.processed) {
          errorHandler(res?.status, res?.data?.message, error);
        }
      });
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
}
