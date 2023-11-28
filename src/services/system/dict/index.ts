import { Http } from '@/services/request';
import { DataResult, PageResult } from '@/utils/result';
import { DictValueEnumObj } from '@/components/DictTag';

export function page(params?: any) {
  return Http.get<PageResult<Array<API.System.DictVO>>>('/system/dict/page', params);
}

export function get(params?: any) {
  return Http.get<DataResult<Array<API.System.DictVO>>>('/system/dict/get', params);
}

export function getByCodes(codes: Array<string>, all: boolean = false) {
  return Http.get<DataResult<Record<string, Array<API.System.DictVO>>>>('/system/dict/getByCodes', {codes: codes.join(','), all});
}

export function save(data: API.System.DictDTO) {
  return Http.post<DataResult<null>>('/system/dict/save', data);
}

export function update(data: API.System.DictDTO) {
  return Http.post<DataResult<null>>('/system/dict/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/system/dict/delete/logic', data);
}

export function exportExcel(params?: any) {
  return Http.get<DataResult<void>>('/system/dict/export', params);
}

async function getDictValueEnumByDictVO(
  values: Array<any> | undefined,
  idKey: any = 'id',
  labelKey: string = 'dictLabel',
  valueKey: string = 'dictValue',
  listClassKey: string = 'listClass'
): Promise<DictValueEnumObj> {
  // ts Map类型是一个object
  if(values && values.length > 0) {
    const opts: DictValueEnumObj = {};
    values.forEach((item: any) => {
      if(item[valueKey] !== undefined) {
        opts[item[valueKey]] = {
          text: item[labelKey],
          label: item[labelKey],
          value: item[valueKey],
          key: item[idKey],
          listClass: item[listClassKey] ? item[listClassKey] : 'primary',
          status: item[listClassKey] ? item[listClassKey] : 'primary'
        };
      }
    });
    return opts;
  } else {
    return {};
  }
}

export async function getDictValueEnum(
  values: Record<string, Array<any>> | undefined,
  idKey: any = 'id',
  labelKey: string = 'dictLabel',
  valueKey: string = 'dictValue',
  listClassKey: string = 'listClass'
): Promise<Record<string, DictValueEnumObj>> {
  // ts Map类型是一个object
  if(values) {
    const opts: Record<string, DictValueEnumObj> = {};
    Object.keys(values).forEach((key) => {
      const array = values[key];
      getDictValueEnumByDictVO(array,idKey,labelKey,valueKey,listClassKey).then((res) =>{
        opts[key] = res
      })
    })
    return opts;
  } else {
    return {};
  }
}


export async function getOptionsByDictValueEnumObj(
  values: DictValueEnumObj | undefined
): Promise<Array<any>>  {
  let data: Array<any> = []
  if(values && Object.keys(values).length > 0){
    Object.keys(values).forEach((v) => {
      data.push({
        value: values[v].value,
        label: values[v].label
      })
    })
    }
  return data;
}

async function getOptionsByDictVO(
  values: Array<API.System.DictVO> | undefined
): Promise<Array<any>>  {
  let data: Array<any> = []
  if(values && values.length > 0) {
    values.forEach((item: API.System.DictVO) => {
      data.push({
        value: item.dictLabel,
        label: item.dictValue
      })
    })
  }
  return data;
}

export async function getOptions(
  values: Record<string, Array<API.System.DictVO>> | undefined
): Promise<Record<string, Array<any>>>  {
  if(values) {
    const opts: Record<string, Array<any>> = {};
    Object.keys(values).forEach((key) => {
      const array = values[key];
      getOptionsByDictVO(array).then((res) =>{
        opts[key] = res
      })
    })
    return opts;
  } else {
    return {};
  }
}
