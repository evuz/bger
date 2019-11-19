export interface Action<T = any> {
  type: any;
  payload: T;
}

export interface StoreAdapter {
  dispatch(action: Action): any;
  getState(): any;
  subscribe(listener: (store: any) => void): { unsubscribe: () => void };
}
