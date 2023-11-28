export const StatusEnum = {
  ERROR: '错误',
  NOT_FOUND: {
    status: 404,
    msg: '请求资源不存在',
  },
  SERVER_INTERNAL_ERROR: {
    status: 500,
    msg: '服务器内部错误',
  },
  NOT_YET_IMPLEMENTED: {
    status: 501,
    msg: '尚未实施',
  },
  BAD_GATEWAY: {
    status: 502,
    msg: '错误网关',
  },
  SERVICE_NOT_AVAILABLE: {
    status: 503,
    msg: '服务不可用',
  },
  REQUEST_INTERFACE_TIMEOUT: {
    status: 504,
    msg: '请求接口超时',
  },
};

export const CodeEnum = {
  ERROR: '错误',
  // 默认提示语
  SUCCESS_DEFAULT: '操作成功',
  // 操作成功
  SUCCESS: 200,
  // 操作失败
  FAILED: -1,
  // 无效令牌
  UNAUTHORIZED: 401,
  // 参数验证失败
  VALIDATE_FAILED: 402,
  // 没有相关权限
  FORBIDDEN: 403,
  // 未携带令牌认证信息
  AUTHORIZATION_HEADER_IS_EMPTY: 602,
  // 令牌已过期
  JWT_TOKEN_EXPIRE: 603,
  // 刷新令牌已过期
  JWT_REFRESH_TOKEN_EXPIRE: 604,
  // 验证码错误
  VERIFICATION_CODE_FAILED: 997,
};

// 与后端约定的响应数据格式
export interface Result {
  code: number;
  message: string;
}

export interface DataResult<T = any> extends Result {
  data: T;
}

export interface PageResult<T = any> extends Result {
  data: T;
  pageNo: number;
  pageSize: number;
  total: number;
  totalPage: number;
}
