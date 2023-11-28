declare namespace API.System {

  type LogApiDTO = {
    serviceId?: string,
    serverIp?: string,
    serverHost?: string,
    env?: string,
    remoteIp?: string,
    userAgent: string,
    requestUri: number,
    method: number,
    methodClass?: string,
    methodName: number,
    params?: number,
    time: number,
    result?: string;
    title?: string;
    type?: string;
  }&API.Base.BaseDTO

  type LogApiVO = {
    serviceId?: string,
    serverIp?: string,
    serverHost?: string,
    env?: string,
    remoteIp?: string,
    userAgent: string,
    requestUri: number,
    method: number,
    methodClass?: string,
    methodName: number,
    params?: number,
    time: number,
    result?: string;
    title?: string;
    type?: string;
    createTime?: string;
  }&API.Base.BaseVO

  type LogApiQuery = {
    realName?: string,
    username?: string;
    createTimeBegin?: string;
    createTimeEnd?: string;
  }&API.Base.BaseQuery

}
