import { StoreAdapter, Action } from './StoreAdapter';

export enum Actions {
  Initial = '@@store/Initial'
}

export class Store implements StoreAdapter {
  private keys: string[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any } = {};
  private listeners: Array<(state) => void>;

  constructor({ reducers }: { reducers: { [key: string]: Function } }) {
    this.reducers = reducers;
    this.keys = Object.keys(reducers);
    this.dispatch({ type: Actions.Initial, payload: null });
  }

  public dispatch(action: Action) {
    for (let index = 0; index < this.keys.length; index++) {
      const key = this.keys[index];
      const reducer = this.reducers[key];
      this.state[key] = reducer(this.state[key], action || {});
    }
    for (let index = 0; index < this.listeners.length; index++) {
      const listener = this.listeners[index];
      listener(this.state);
    }
  }

  public getState() {
    return this.state;
  }

  public subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.')
    }
    this.listeners.push(listener);

    let isSubscribed = true;
    return {
      unsubscribe: () => {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        const index = this.listeners.indexOf(listener)
        this.listeners.splice(index, 1)
      }
    };
  }
}
