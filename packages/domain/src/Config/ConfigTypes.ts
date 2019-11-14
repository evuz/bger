import { Config } from './Config';

import { FetcherAdapter } from '../Adapters/Fetcher/FetcherAdapter';
import { AuthProviderAdapter } from '../Adapters/AuthProvider/AuthProviderAdapter';
import { StorageAdapter } from '../Adapters/Storage/StorageAdapter';
import { StoreAdapter } from '../Adapters/Store/StoreAdapter';

export interface IAdapter {
  fetcher?: FetcherAdapter;
  authProvider?: AuthProviderAdapter;
  storage?: StorageAdapter;
  store: StoreAdapter;
}

export interface IConfig {
  serverUrl?: string;
}

export type ConfigAdapters = Config<IAdapter>;
export type ConfigValues = Config<IConfig>;
