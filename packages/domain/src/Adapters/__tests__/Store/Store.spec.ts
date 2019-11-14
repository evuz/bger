import { Store } from '../../Store/Store';

function reducer(name, initialState = null) {

  return function (state = initialState, { type, payload }) {
    switch (type) {
      case `save_${name}`:
        return payload;
      default:
        return state;
    }
  }
}

describe('Store', () => {
  let store: Store;
  beforeEach(() => {
    store = new Store({
      reducers: {
        league: reducer('league'),
        teams: reducer('teams', []),
      }
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
    store.dispatch({ type: 'save_league', payload: { id: '3', name: 'Premier' } })
    const { league, teams } = store.getState();
    expect(league).toStrictEqual({ id: '3', name: 'Premier' });
    expect(teams).toEqual([]);
  });
});
