/**
 * 判断一个值是否为undefined
 * @param value 要判断的值
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

/**
 * 判断一个值是否为null
 * @param value 要判断的值
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * 判断一个值是否为布尔值
 * @param value 要判断的值
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 判断一个值是否为数字
 * @param value 要判断的值
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 判断一个值是否为字符串
 * @param value 要判断的值
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * 判断一个值是否为Symbol
 * @param value 要判断的值
 */
export function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}

/**
 * 判断一个值是否为对象
 * @param value 要判断的值
 */
export function isObject(value: any): value is object {
  return typeof value === 'object' && value !== null;
}

/**
 * 判断一个值是否为函数
 * @param value 要判断的值
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * 判断一个值是否为数组
 * @param value 要判断的值
 */
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

/**
 * 判断一个值是否为日期对象
 * @param value 要判断的值
 */
export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * 判断一个值是否为正则表达式对象
 * @param value 要判断的值
 */
export function isRegExp(value: any): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

/**
 * 判断一个值是否为错误对象
 * @param value 要判断的值
 */
export function isError(value: any): value is Error {
  return value instanceof Error;
}

/**
 * 判断一个值是否为Promise对象
 * @param value 要判断的值
 */
export function isPromise(value: any): value is Promise<any> {
  return isObject(value) && isFunction((value as any).then) && isFunction((value as any).catch);
}

/**
 * 判断一个值是否为Map对象
 * @param value 要判断的值
 */
export function isMap(value: any): value is Map<any, any> {
  return Object.prototype.toString.call(value) === '[object Map]';
}

/**
 * 判断一个值是否为Set对象
 * @param value 要判断的值
 */
export function isSet(value: any): value is Set<any> {
  return Object.prototype.toString.call(value) === '[object Set]';
}

/**
 * 判断一个值是否为HTMLElement对象
 * @param value 要判断的值
 */
export function isHTMLElement(value: any): value is HTMLElement {
  return value instanceof HTMLElement;
}

/**
 * 判断一个值是否为Window对象
 * @param value 要判断的值
 */
export function isWindow(value: any): value is Window {
  return value === window;
}

/**
 * 判断一个值是否为Document对象
 * @param value 要判断的值
 */
export function isDocument(value: any): value is Document {
  return value === document;
}

/**
 * 判断一个值是否为FormData对象
 * @param value 要判断的值
 */
export function isFormData(value: any): value is FormData {
  return Object.prototype.toString.call(value) === '[object FormData]';
}

/**
 * 判断一个值是否为Blob对象
 * @param value 要判断的值
 */
export function isBlob(value: any): value is Blob {
  return Object.prototype.toString.call(value) === '[object Blob]';
}

/**
 * 判断一个值是否为File对象
 * @param value 要判断的值
 */
export function isFile(value: any): value is File {
  return Object.prototype.toString.call(value) === '[object File]';
}

/**
 * 判断一个值是否为ArrayBuffer对象
 * @param value 要判断的值
 */
export function isArrayBuffer(value: any): value is ArrayBuffer {
  return Object.prototype.toString.call(value) === '[object ArrayBuffer]';
}

/**
 * 判断一个值是否为URLSearchParams对象
 * @param value 要判断的值
 */
export function isURLSearchParams(value: any): value is URLSearchParams {
  return value instanceof URLSearchParams;
}

/**
 * 判断一个值是否为PromiseLike对象
 * @param value 要判断的值
 */
export function isPromiseLike<T = any>(value: any): value is PromiseLike<T> {
  return isObject(value) && isFunction((value as any).then);
}

/**
 * 判断一个值是否为null和undefined
 * @param value 要判断的值
 */
export function isNullAndUnDef(value: any): value is null | undefined {
  return isNull(value) && isUndefined(value);
}

/**
 * 判断一个值是否为null或undefined
 * @param value 要判断的值
 */
export function isNullOrUnDef(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/**
 * 判断一个值是否为空的
 * @param value 要判断的值
 */
export function isEmpty(value: any): value is any {
  if (isArray(value) || isString(value)) return value.length === 0;
  if (isMap(value) || isSet(value)) return value.size === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

/**
 * 判断一个值是否为url
 * @param path
 */
export function isUrl(path: string): boolean {
  const reg =
    /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;
  return reg.test(path);
}

