import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function page(params?: any) {
  return Http.get<PageResult<Array<API.System.LogApiVO>>>('/system/logApi/page', params);
}

export function get(params?: API.Base.GetQuery) {
  return Http.get<DataResult<API.System.LogApiVO>>('/system/logApi/get', params);
}


export function save(data: API.System.LogApiDTO) {
  return Http.post<DataResult<null>>('/system/logApi/save', data);
}

export function update(data: API.System.LogApiDTO) {
  return Http.post<DataResult<null>>('/system/logApi/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/system/logApi/delete/logic', data);
}


