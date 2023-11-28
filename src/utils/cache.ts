const cache = {
  key: 'summer_',
  // 设置缓存(expire为缓存时效)
  set(key: string, value: any, expire?: string): void {
    const cacheKey = this.getKey(key);
    let data: any = {
      expire: expire ? this.time() + expire : '',
      value,
    };

    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    try {
      window.localStorage.setItem(cacheKey, data);
    } catch (e) {
      console.log('error', e);
    }
  },
  get(key: string): any {
    const cacheKey = this.getKey(key);
    try {
      const data = window.localStorage.getItem(cacheKey);
      if (!data) {
        return null;
      }
      const { value, expire } = JSON.parse(data);
      if (expire && expire < this.time()) {
        window.localStorage.removeItem(cacheKey);
        return null;
      }
      return value;
    } catch (e) {
      return null;
    }
  },
  // 获取当前时间
  time() {
    return Math.round(new Date().getTime() / 1000);
  },
  remove(key: string) {
    const cacheKey = this.getKey(key);
    window.localStorage.removeItem(cacheKey);
  },
  getKey(key: string) {
    return this.key + key;
  },
};

export default cache;
