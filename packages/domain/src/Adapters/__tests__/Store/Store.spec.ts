import { Store } from '../../Store/Store';

function reducer(name, initialState = null) {
  return function(state = initialState, { type, payload }) {
    switch (type) {
      case `save_${name}`:
        return payload;
      default:
        return state;
    }
  };
}

describe('Store', () => {
  let store: Store;
  beforeEach(() => {
    store = new Store({
      reducers: {
        league: reducer('league'),
        teams: reducer('teams', []),
      },
    });
  });

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should get initial states', () => {
    const { league, teams } = store.getState();
    expect(league).toBeNull();
    expect(teams).toEqual([]);
  });

  it('should modify state after dispatch', () => {
    store.dispatch({ type: 'save_league', payload: { id: '3', name: 'Premier' } });
    const { league, teams } = store.getState();
    expect(league).toStrictEqual({ id: '3', name: 'Premier' });
    expect(teams).toEqual([]);
  });

  it('should update state in subscribe', done => {
    store.subscribe(state => {
      const { league, teams } = state;
      expect(league).toStrictEqual({ id: '3', name: 'Premier' });
      expect(teams).toEqual([]);
      done();
    });
    store.dispatch({ type: 'save_league', payload: { id: '3', name: 'Premier' } });
  });

  it('should unsubscribe store', done => {
    let update = 0;
    const subscribe = store.subscribe(() => {
      update = update + 1;
    });
    store.dispatch({ type: 'save_league', payload: { id: '3', name: 'Premier' } });
    subscribe.unsubscribe();
    store.dispatch({ type: 'save_league', payload: { id: '3', name: 'Premier' } });
    setTimeout(() => {
      expect(update).toBe(1);
      done();
    }, 100);
  });
});
