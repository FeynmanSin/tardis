declare namespace API.System {

  type CodeDTO = {
    dataSourceId?: string;
    tablePrefix?: string;
    pkName?: string;
    packageName?: string;
    moduleName?: string;
    author?: string;
    email?: number;
    ignoreColumns?: number;
    mainPath?: string;
    typeCast?: number;
    planName?: number;
    templateKey? :string;
    tableName?: string;
    extendEntity?: number;
    codeTableJsonStr?: string
  }&API.Base.BaseDTO

  type CodeVO = {
    dataSourceId?: string;
    dataSourceName?: string;
    tablePrefix?: string;
    pkName?: string;
    packageName?: string;
    moduleName?: string;
    author?: string;
    email?: number;
    ignoreColumns?: number;
    mainPath?: string;
    typeCast?: number;
    planName?: number;
    templateKey? :string;
    tableName?: string;
    extendEntity?: number;
    codeTableList?: Array[CodeTableVO]
  }&API.Base.BaseVO

  type CodeQuery = {
    planName?: string;
  }&API.Base.BaseQuery

}
