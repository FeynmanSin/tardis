import axiosInstance from './axiosInstance';

class Request {
  private constructor() {}
  private static instance: Request | null = null;

  public static getInstance(): Request {
    this.instance = this.instance || new Request();
    return this.instance;
  }

  public async get<T = any>(url: string, params?: any, options?: { [key: string]: any }): Promise<T> {
    const response = await axiosInstance.get<T>(url,{
      params,
      ...(options || {}),
    })
    return response.data
  }

  public async post<T = any>(url: string, data?: any, options?: { [key: string]: any }): Promise<T> {
    const response = await axiosInstance.post<T>(url, data,{
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
    return response.data
  }

  public async form<T = any>(url: string, data?: any, options?: { [key: string]: any }): Promise<T> {
    const response = await axiosInstance.postForm<T>(url, data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...(options || {}),
    });
    return response.data
  }

  public async put<T = any>(url: string, data?: any, options?: { [key: string]: any }): Promise<T> {
    const response = await axiosInstance.put<T>(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
    return response.data
  }

  public async delete<T = any>(url: string, ids: string, options?: { [key: string]: any }): Promise<T> {
    const response = await axiosInstance.delete<T>(url + '/' + ids, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
    return response.data
  }
}
const Http: Request = Request.getInstance();

export { Http };
