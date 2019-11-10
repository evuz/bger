export interface StorageAdapter {
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<any>;
  remove(key: string): Promise<any>;
}
