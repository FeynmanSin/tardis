import { Http } from '@/services/request';
import { DataResult } from '@/utils/result';

export function login(data: API.System.LoginDTO) {
  return Http.post<DataResult<API.System.TokenInfoVO>>('/system/sso/login', data);
}

export function logout() {
  return Http.post<DataResult<null>>('/system/sso/logout');
}

export function refreshToken(params: API.System.RefreshTokenDTO, options?: { [key: string]: any }) {
  return Http.get<DataResult<API.System.TokenInfoVO>>('/system/sso/refreshToken', params, { ...options, isToken: false });
}

// 获取验证码
export const captcha = () => {
  return Http.get<DataResult<API.System.Captcha>>('/system/captcha/login/image/encode');
}

// 获取rsa公钥
export const getRsaPublicKey = () => {
  return Http.get<DataResult>('/pub/encrypt/getRsaPublicKey');
}