import { FetcherAdapter } from '../Adapters/Fetcher/FetcherAdapter';
import { AuthProviderAdapter } from '../Adapters/AuthProvider/AuthProviderAdapter';
import { StorageAdapter } from '../Adapters/Storage/StorageAdapter';
import { StoreAdapter } from '../Adapters/Store/StoreAdapter';

export interface IConfig {
  fetcher?: FetcherAdapter;
  authProvider?: AuthProviderAdapter;
  storage?: StorageAdapter;
  serverUrl?: string;
  store: StoreAdapter;
}

export class Config {
  constructor(private _config: IConfig) {}
  get<T extends keyof IConfig>(key: T): IConfig[T] {
    if (!this._config[key]) {
      throw Error(`Config doesn't have ${key}`);
    }
    return this._config[key];
  }

  set<T extends keyof IConfig>(key: T, value: IConfig[T]) {
    this._config[key] = value;
  }
}
