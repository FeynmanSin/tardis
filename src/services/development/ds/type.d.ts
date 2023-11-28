declare namespace API.System {

  type DataSourceDTO = {
    name?: string,
    driverClass?: string,
    url?: string,
    username?: string,
    password?: string,
    remark?: string,
    type?: number,
    port?: number,
    host?: string,
    dataBase?: number,
    auth?: number,
    source?: number
  }&API.Base.BaseDTO

  type DataSourceVO = {
    name?: string,
    driverClass?: string,
    url?: string,
    username?: string,
    password?: string,
    remark?: string,
    type?: number,
    port?: number,
    host?: string,
    dataBase?: number,
    auth?: number,
    source?: number
  }&API.Base.BaseVO

  type DataSourceQuery = {
    name?: string,
    driverClass?: string,
    type?: number,
  }&API.Base.BaseQuery

}
