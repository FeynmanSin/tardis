import { Http } from '@/services/request';
import { DataResult } from '@/utils/result';

export function generate(params: {}) {
  return Http.get<DataResult<string>>('/system/captcha/generate', params);
}

export function check(data: API.System.ImageCaptchaTrackDTO) {
  return Http.post<DataResult<boolean>>('/system/captcha/check', data);
}
