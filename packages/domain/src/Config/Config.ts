import { FetcherAdapter } from '../Adapters/Fetcher/FetcherAdapter';
import { AuthProviderAdapter } from '../Adapters/AuthProvider/AuthProviderAdapter';

export interface IConfig {
  fetcher?: FetcherAdapter;
  authProvider?: AuthProviderAdapter;
}

export class Config {
  constructor(private _config: IConfig) {}
  get<T extends keyof IConfig>(key: T): IConfig[T] {
    if (!this._config[key]) {
      throw Error(`Config doesn't have ${key}`);
    }
    return this._config[key];
  }
}
