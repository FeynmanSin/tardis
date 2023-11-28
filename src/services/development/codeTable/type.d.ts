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

  type CodeTableQuery = {
    codeId?: string,
  }&API.Base.BaseQuery

}
