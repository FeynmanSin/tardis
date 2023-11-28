declare namespace API.System {
  type UserSVO = {
    username: string;
    password: string,
    realName: string;
    avatar?: string;
    mobile?: string,
    email?: string;
    permissions?: Array<string>;
    roleNameList?: Array<string>;
  } & API.Base.BaseVO;
  type UserDTO = {
    username: string;
    password: string,
    realName: string;
    avatar?: string;
    mobile?: string,
    email?: string;
    disabled?: number;
    locked?: number;
    orgId?: number;
    sex: number;
  } & API.BaseDTO;
  type UserVO = {
    username: string;
    password: string,
    realName: string;
    avatar?: string;
    mobile?: string,
    email?: string;
    disabled?: number;
    locked?: number;
    orgId?: number;
    sex: number;
  } & API.Base.BaseVO;
  type UserQuery = {
    username?: string;
    realName?: string;
    mobile?: string,
    email?: string;
    orgId?: string;
    sex: number;
    disabled?: number;
    locked?: number;
  } & API.Base.BaseQuery;
  type UpdatePasswordDTO = {
    password?: string;
    newPassword?: string;
    userIds?: Array<number>;
  }
  type UserRoleDTO = {
    userIds?: number;
    roleId?: number;
    roleIds?: number;
  }
}
