declare namespace API.System {
  type OrgDTO = {
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
  type OrgVO = {
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
  type OrgQuery = {
    tenantId?: string;
  } & API.Base.BaseQuery;
  type OrgNode = {
    id: number | string;
    parentId: number | string;
    children: Array<OrgNode>;
    hasChildren: boolean;
    tenantId: string;
    orgName: string;
    sort: number;
    remark: string;
  }
}
