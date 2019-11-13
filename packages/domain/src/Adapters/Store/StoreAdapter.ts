export interface StoreAdapter {
  dispatch(action): any;
  getState(): any;
}
