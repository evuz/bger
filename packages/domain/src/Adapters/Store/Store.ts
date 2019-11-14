import { StoreAdapter, Action } from './StoreAdapter';

export class Store implements StoreAdapter {
  private keys: string[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any } = {};

  constructor({ reducers }: { reducers: { [key: string]: Function } }) {
    this.reducers = reducers;
    this.keys = Object.keys(reducers);
    this.dispatch(null);
  }

  public dispatch(action: Action) {
    for (let index = 0; index < this.keys.length; index++) {
      const key = this.keys[index];
      const reducer = this.reducers[key];
      this.state[key] = reducer(this.state[key], action || {});
    }
  }

  public getState() {
    return this.state;
  }
}
