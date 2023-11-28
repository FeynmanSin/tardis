import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function getByCodeId(params?: API.System.CodeTableQuery) {
  return Http.get<PageResult<Array<API.System.CodeTableVO>>>('/development/code/table/getByCodeId', params);
}

export function saveCodeTable(data?: API.System.CodeTableDTO) {
  return Http.post<DataResult<null>>('/development/code/table/save', data);
}

