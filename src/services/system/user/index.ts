import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';

export function currentUser() {
  return Http.get<DataResult<API.System.UserSVO>>('/system/user/currentUser');
}

export function queryPage(params?: API.System.UserQuery) {
  return Http.get<PageResult<Array<API.System.UserVO>>>('/system/user/page', params);
}

export function save(data: API.System.UserDTO) {
  return Http.post<DataResult<null>>('/system/user/save', data);
}

export function update(data: API.System.UserDTO) {
  return Http.post<DataResult<null>>('/system/user/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/system/user/delete/logic', data);
}

export function get(params?: API.Base.BaseDTO) {
  return Http.get<DataResult<API.System.UserSVO>>('/system/user/get', params);
}

export function updateDisabled(data: API.System.UserDTO) {
  return Http.post<DataResult<null>>('/system/user/updateDisabled', data);
}

export function updateLocked(data: API.System.UserDTO) {
  return Http.post<DataResult<null>>('/system/user/updateLocked', data);
}

export function restPassword(data: API.System.UpdatePasswordDTO) {
  return Http.post<DataResult<null>>('/system/user/restPassword', data);
}

export function updatePassword(data: API.System.UpdatePasswordDTO) {
  return Http.post<DataResult<null>>('/system/user/updatePassword', data);
}

export function saveUserRole(data: API.System.UserRoleDTO) {
  return Http.post<DataResult<null>>('/system/userRole/save', data);
}

export function getRoleByUserId(params?: API.System.UserRoleDTO) {
  return Http.get<DataResult<Array<string>>>('/system/userRole/getByUserId', params);
}
