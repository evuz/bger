import { StorageAdapter } from './StorageAdapter';

const TYPE = 'LocalStorage';
export class LocalStorage implements StorageAdapter {
  private values = {};

  constructor(private window: Window) {}

  get(key: string) {
    if (this.values[key]) {
      return Promise.resolve(this.values[key]);
    }

    let value: any = this.window.localStorage.getItem(key);
    try {
      value = JSON.parse(value);
      if (value instanceof Object && value.type === TYPE) {
        value = value.value;
      }
      this.values[key] = value;
    } catch (error) {}
    return Promise.resolve(value);
  }

  set(key: string, value: any) {
    const v = { type: TYPE, value };
    this.window.localStorage.setItem(key, JSON.stringify(v));
    this.values[key] = value;
    return Promise.resolve(value);
  }

  remove(key: string) {
    this.window.localStorage.removeItem(key);
    this.values[key] = null;
    return Promise.resolve(key);
  }
}
