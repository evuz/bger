import ky from 'ky';

import { FetcherAdapter } from './FetcherAdapter';

export class KyFetcher implements FetcherAdapter {
  get(url: string) {
    return ky.get(url, { mode: 'navigate' }).json();
  }
  post(url: string, body) {
    return ky.post(url, { json: body }).json();
  }
  put(url: string, body) {
    return ky.put(url, { json: body }).json();
  }
  delete(url: string) {
    return ky.delete(url).json();
  }
}
