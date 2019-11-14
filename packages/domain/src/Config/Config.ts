export class Config<T extends Object> {
  constructor(private _config: T) {}
  get<K extends keyof T>(key: K): T[K] {
    if (!this._config[key]) {
      throw Error(`Config doesn't have ${key}`);
    }
    return this._config[key];
  }

  set<K extends keyof T>(key: K, value: T[K]) {
    this._config[key] = value;
  }
}
