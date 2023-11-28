import {
  clearToken,
  getAccessToken,
  getRefreshToken,
  setAccessToken, setAccessTokenExpiresIn, setAcquireTokenTime, setRefreshToken,
} from '@/utils/auth';
import { refreshToken } from '@/services/system/sso';
import { CodeEnum, StatusEnum } from '@/utils/result';
import queryString from 'query-string';
import { message as Message, notification as Notification } from 'antd';
import { setRemoteMenu } from '@/services/system/menu';
import { history } from '@@/core/history';
import { PageEnums } from '@/enums/pagesEnums';
import { download } from '@/utils/download';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  isToken?: boolean;
  isRefreshToken?: boolean;
}

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    switch (error.response.status) {
      case StatusEnum.NOT_FOUND.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.NOT_FOUND.msg,
        });
        break;
      case StatusEnum.SERVER_INTERNAL_ERROR.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.SERVER_INTERNAL_ERROR.msg,
        });
        break;
      case StatusEnum.NOT_YET_IMPLEMENTED.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.NOT_YET_IMPLEMENTED.msg,
        });
        break;
      case StatusEnum.BAD_GATEWAY.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.BAD_GATEWAY.msg,
        });
        break;
      case StatusEnum.SERVICE_NOT_AVAILABLE.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.SERVICE_NOT_AVAILABLE.msg,
        });
        break;
      case StatusEnum.REQUEST_INTERFACE_TIMEOUT.status:
        Notification.error({
          message: StatusEnum.ERROR,
          description: StatusEnum.REQUEST_INTERFACE_TIMEOUT.msg,
        });
        break;
    }
  }
  return Promise.reject(error);
};

// 创建 axiosInstance 实例
const axiosInstance: AxiosInstance = axios.create({
  // baseURL: REACT_APP_BASE_URL,
  baseURL: '/kmdm',
  timeout: 30000,
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosInstance.interceptors.request.use((config: CustomAxiosRequestConfig) => {
  console.log('???????config', config)
  if (getAccessToken()) {
    const old = config.headers || {};
    const isToken = config.isToken === undefined ? true : config.isToken;
    if (isToken) {
      config.headers = {
        ...old,
        Authorization: `bearer ${getAccessToken()}`,
      };
    }
  }
  return { ...config };
});

let promise: Promise<any> | null;

async function refreshAccessToken() {
  if (promise) {
    return promise;
  }
  promise = new Promise(async (resolve) => {
    const cacheRefreshToken = getRefreshToken(); // Retrieve the refresh token from storage
    const response = await refreshToken({ refresh_token: cacheRefreshToken }, { isRefreshToken: true });
    if (CodeEnum.SUCCESS === response.code) {
      const { access_token, refresh_token, expires_in } = response.data;
      setAcquireTokenTime(new Date().getTime());
      setAccessToken(access_token);
      setAccessTokenExpiresIn(expires_in);
      setRefreshToken(refresh_token);
    }
    resolve(CodeEnum.SUCCESS === response.code);
  });
  promise.finally(() => {
    promise = null;
  });
  return promise;
}

axiosInstance.interceptors.response.use(
  // 拦截响应数据，进行个性化处理
  async (response: AxiosResponse & { config: CustomAxiosRequestConfig }) => {
    const { code, message } = response.data;
    if (code && CodeEnum.SUCCESS !== code) {
      if (CodeEnum.VALIDATE_FAILED === code
        || CodeEnum.FORBIDDEN === code
        || CodeEnum.AUTHORIZATION_HEADER_IS_EMPTY === code) {
        Notification.error({
          description: message,
          message: CodeEnum.ERROR,
        });
      } else if (CodeEnum.UNAUTHORIZED === code || CodeEnum.JWT_TOKEN_EXPIRE == code) {
        //刷新access_token
        //非refreshToken接口 response.config.isRefreshToken === undefined 或者应该设置 response.config.isRefreshToken === false ，不设置为undefined
        //refreshToken接口 设置 response.config.isRefreshToken === true
        //refreshToken接口返回401证明token已经完全过期
        //非refreshToken接口返回401则需要尝试用refreshToken接口获取新的access_token
        const isRefreshToken = response.config.isRefreshToken !== undefined ? response.config.isRefreshToken : false;
        if (isRefreshToken) {
          //刷新access_token失败
          Message.destroy();
          Message.error(message);
          //刷新access_token失败
          clearToken();
          setRemoteMenu(null);
          history.push(PageEnums.LOGIN);
        } else {
          const isSuccess = await refreshAccessToken();
          if (isSuccess) {
            //刷新access_token成功
            const old = response.config.headers || {};
            response.config.headers = {
              ...old,
              Authorization: `bearer ${getAccessToken()}`,
            };
            return axiosInstance(response.config);
          }
        }
      } else {
        Notification.error({
          description: message,
          message: CodeEnum.ERROR,
        });
      }
    }
    // 将组件用的数据返回
    if (response.request.responseType === 'blob') {
      download(response);
    }
    return response;
  },
  error => {
    return errorHandler(error);
  },
);

export default axiosInstance;

