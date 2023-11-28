import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function queryPage(params?: API.System.RoleQuery) {
  return Http.get<PageResult<Array<API.System.RoleVO>>>('/system/role/page', params);
}

export function save(data: API.System.RoleDTO) {
  return Http.post<DataResult<null>>('/system/role/save', data);
}

export function update(data: API.System.RoleDTO) {
  return Http.post<DataResult<null>>('/system/role/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/system/role/delete/logic', data);
}

export function saveRoleMenu(data: API.System.RoleMenuDTO) {
  return Http.post<DataResult<null>>('/system/roleMenu/save', data);
}

export function getMenuByRoleId(params?: API.System.RoleMenuDTO) {
  return Http.get<DataResult<Array<string>>>('/system/roleMenu/getByRoleId', params);
}
