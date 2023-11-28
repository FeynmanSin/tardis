declare namespace API.System {

  type CodeTableDTO = {
    codeId?: string,
    tableName?: string,
    extendEntity?: string,
  }&API.Base.BaseDTO

  type CodeTableVO = {
    codeId?: string,
    tableName?: string,
    extendEntity?: string,
  }&API.Base.BaseVO

  type TableQuery = {
    tableName?: string,
    dataSourceId?: string,
  }&API.Base.BaseQuery

}
