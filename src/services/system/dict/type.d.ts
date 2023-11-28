declare namespace API.System {

  type DictDTO = {
    code?: string;
    dictLabel?: string;
    dictValue?: string;
    sort?: number;
    remark?: string;
    type?: number;
    infoExt?: string;
    parentId?: string;
    listClass?: string;
  }&API.Base.BaseDTO

  type DictVO = {
    code?: string;
    dictLabel?: string;
    dictValue?: string;
    sort?: number;
    remark?: string;
    type?: number;
    infoExt?: string;
    parentId?: string;
    listClass?: string;
  }&API.Base.BaseVO

  type DictQuery = {
    code?: string;
    dictLabel?: string;
    type? : string;
  }&API.Base.BaseQuery

  declare function getListClass(key: string): string;

}
