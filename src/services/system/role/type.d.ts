declare namespace API.System {
  type RoleDTO = {
    roleName: string;
    sort: string,
    roleAlias: string;
    type?: string;
  } & API.BaseDTO;
  type RoleVO = {
    roleName: string;
    sort: string,
    roleAlias: string;
    type?: string;
  } & API.Base.BaseVO;
  type RoleQuery = {
    roleName: string;
    roleAlias: string;
    type?: string;
  } & API.Base.BaseQuery;
  type RoleMenuDTO = {
    roleId?: string,
    roleIds?: Array<string>;
    menuIds?: Array<string>;
  }
}
