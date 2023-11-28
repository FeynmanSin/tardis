import { Http } from '@/services/request';
import { DataResult } from '@/utils/result';

export default function getRsaPublicKey() {
  return Http.get<DataResult<string>>('/system/encrypt/getRsaPublicKey');
}
