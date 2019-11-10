import ky from 'ky';

import { FetcherAdapter } from './FetcherAdapter';

export class KyFetcher implements FetcherAdapter {
  get(url: string, options) {
    return ky.get(url, options).json();
  }
  post(url: string, body, options) {
    return ky.post(url, { ...options, json: body }).json();
  }
  put(url: string, body, options) {
    return ky.put(url, { ...options, json: body }).json();
  }
  delete(url: string, options) {
    return ky.delete(url, options).json();
  }
}
