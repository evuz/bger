export interface FetcherAdapter {
  get(url: string, options?): Promise<any>;
  post(url: string, body, options?): Promise<any>;
  put(url: string, body, options?): Promise<any>;
  delete(url: string, options?): Promise<any>;
}
