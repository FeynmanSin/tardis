import { CacheEnums } from '@/enums/cacheEnums';
import cache from './cache';

const setAccessToken = (accessToken: string) => {
  cache.set(CacheEnums.ACCESS_TOKEN_KEY, accessToken);
};

const getAccessToken = () => {
  return cache.get(CacheEnums.ACCESS_TOKEN_KEY);
};

const setAcquireTokenTime = (acquireTokenTime: number) => {
  cache.set(CacheEnums.ACQUIRE_TOKEN_TIME_KEY, acquireTokenTime);
};

const getAcquireTokenTime = () => {
  return cache.get(CacheEnums.ACQUIRE_TOKEN_TIME_KEY);
};

const setAccessTokenExpiresIn = (accessTokenExpiresIn: number) => {
  cache.set(CacheEnums.ACCESS_TOKEN_EXPIRES_IN_KEY, accessTokenExpiresIn);
};

const getAccessTokenExpiresIn = () => {
  return cache.get(CacheEnums.ACCESS_TOKEN_EXPIRES_IN_KEY);
};

const setRefreshToken = (refreshToken: string) => {
  cache.set(CacheEnums.REFRESH_TOKEN_KEY, refreshToken);
};

const getRefreshToken = () => {
  return cache.get(CacheEnums.REFRESH_TOKEN_KEY);
};

const isLogin = () => {
  return !!cache.get(CacheEnums.ACCESS_TOKEN_KEY);
};

const clearAccessToken = () => {
  cache.remove(CacheEnums.ACCESS_TOKEN_KEY);
};

const clearToken = () => {
  cache.remove(CacheEnums.ACCESS_TOKEN_EXPIRES_IN_KEY);
  cache.remove(CacheEnums.ACQUIRE_TOKEN_TIME_KEY);
  cache.remove(CacheEnums.ACCESS_TOKEN_KEY);
  cache.remove(CacheEnums.REFRESH_TOKEN_KEY);
};

export {
  isLogin,
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  clearToken,
  setAccessTokenExpiresIn,
  getAccessTokenExpiresIn,
  setAcquireTokenTime,
  getAcquireTokenTime,
  clearAccessToken
};
