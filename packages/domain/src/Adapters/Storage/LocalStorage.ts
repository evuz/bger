import { StorageAdapter } from './StorageAdapter';

const TYPE = 'LocalStorage';
export class LocalStorage implements StorageAdapter {
  private values = {};
  get(key: string) {
    if (this.values[key]) {
      return Promise.resolve(this.values[key]);
    }

    let value = JSON.parse(window.localStorage.getItem(key));
    if (value instanceof Object && value.type === TYPE) {
      value = value.value;
    }
    this.values[key] = value;
    return Promise.resolve(value);
  }

  set(key: string, value: any) {
    const v = { type: TYPE, value };
    window.localStorage.setItem(key, JSON.stringify(v));
    this.values[key] = value;
    return Promise.resolve(value);
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
    this.values[key] = null;
    return Promise.resolve(key);
  }
}
