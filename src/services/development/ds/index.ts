import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';


export function getList(params?: API.System.DataSourceQuery) {
  return Http.get<PageResult<Array<API.System.DataSourceVO>>>('/development/data/source/list', params);
}

export function page(params?: API.System.DataSourceQuery) {
  return Http.get<PageResult<Array<API.System.DataSourceVO>>>('/development/data/source/page', params);
}

export function save(data: API.System.DataSourceDTO) {
  return Http.post<DataResult<null>>('/development/data/source/save', data);
}

export function update(data: API.System.DataSourceDTO) {
  return Http.post<DataResult<null>>('/development/data/source/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/development/data/source/delete/logic', data);
}

export function get(params?: API.Base.GetQuery) {
  return Http.get<DataResult<API.System.DataSourceVO>>('/development/data/source/get', params);
}
