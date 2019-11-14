export interface Action {
  type: any;
  payload: any;
}

export interface StoreAdapter {
  dispatch(action: Action): any;
  getState(): any;
}
