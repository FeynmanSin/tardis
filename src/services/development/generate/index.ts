import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function getAllTemplate() {
  return Http.get<DataResult<Array<any>>>('/development/generator/getAllTemplate');
}

export function codePreview(data?: API.System.CodeDTO) {
  return Http.form<DataResult<string>>('/development/generator/code/preview', data);
}

export function getTableList(params?: API.System.TableQuery) {
  return Http.get<DataResult<Array<any>>>('/development/generator/table/list', params);
}

export function queryTablePage(params?: API.System.TableQuery) {
  return Http.get<PageResult<Array<any>>>('/development/generator/table/page', params);
}

export function code(data?: API.System.CodeDTO) {
  return Http.form<any>('/development/generator/code', data, {'responseType': 'blob'});
}

export function downloadTemplate() {
  return Http.post<DataResult<null>>('/development/generator/downloadTemplate');
}

