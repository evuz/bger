import { LocalStorage } from '../../Storage/LocalStorage';

function localStorage() {
  const values = {
    initial: 'Initial Value',
  };
  function get(key) {
    if (!values[key]) {
      return null;
    }
    return values[key];
  }

  function set(key, value) {
    values[key] = value;
  }

  function remove(key) {
    delete values[key]
  }

  return {
    getItem: jest.fn(key => get(key)),
    setItem: jest.fn((key, value) => set(key, value)),
    removeItem: jest.fn(key => remove(key)),
  };
}

describe('LocalStorage', () => {
  let localstorage: LocalStorage;
  beforeEach(() => {
    localstorage = new LocalStorage(<any>{ localStorage: localStorage() });
  });

  it('should create', () => {
    expect(localstorage).toBeTruthy();
  });

  it('should get value saved', done => {
    localstorage.get('initial').then(val => {
      expect(val).toBe('Initial Value');
      done();
    });
  });

  it('should set string and object', done => {
    Promise.all([
      localstorage.set('string', 'LocalStorageTest'),
      localstorage.set('object', { value: 'LocalStorageTest' }),
    ])
      .then(() => {
        return Promise.all([localstorage.get('string'), localstorage.get('object')]);
      })
      .then(val => {
        expect(val[0]).toBe('LocalStorageTest');
        expect(val[1]).toStrictEqual({ value: 'LocalStorageTest' });
        done();
      });
  });

  it('should remove key', done => {
    localstorage.remove('initial')
      .then(() => localstorage.get('initial'))
      .then(val => {
        expect(val).toBeNull();
        done();
      });
  });
});
