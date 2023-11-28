import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function getList(params?: API.System.CodeQuery) {
  return Http.get<PageResult<Array<API.System.CodeVO>>>('/development/code/list', params);
}

export function page(params?: API.System.CodeQuery) {
  return Http.get<PageResult<Array<API.System.CodeVO>>>('/development/code/page', params);
}

export function save(data: API.System.CodeDTO) {
  return Http.post<DataResult<null>>('/development/code/save', data);
}

export function update(data: API.System.CodeDTO) {
  return Http.post<DataResult<null>>('/development/code/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/development/code/delete/logic', data);
}

export function get(params?: API.Base.GetQuery) {
  return Http.get<DataResult<API.System.CodeVO>>('/development/code/get', params);
}
