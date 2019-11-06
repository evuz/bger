import ky from 'ky';

import { FetcherAdapter } from '@nbager/domain';

export class KyFetcher implements FetcherAdapter {
  constructor(private serverUrl: string) {}

  get(url: string) {
    return ky.get(`${this.serverUrl}/${url}`).json();
  }
  post(url: string, body) {
    return ky.post(`${this.serverUrl}/${url}`, { json: body }).json();
  }
  put(url: string, body) {
    return ky.put(`${this.serverUrl}/${url}`, { json: body }).json();
  }
  delete(url: string) {
    return ky.delete(`${this.serverUrl}/${url}`).json();
  }
}
