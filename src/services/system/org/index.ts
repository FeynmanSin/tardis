import { Http } from '@/services/request';
import { DataResult } from '@/utils/result';

export function getTreeByTenantId(params?: API.System.OrgQuery) {
  return Http.get<DataResult<Array<API.System.OrgNode>>>('/system/org/getTreeByTenantId', params);
}
