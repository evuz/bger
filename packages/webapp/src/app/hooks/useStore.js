import { useState, useEffect } from 'react';

import domain from '../domain';

function useStore(name, update = true) {
  const store = domain.getConfig({ key: 'adapters' }).get('store');
  const [value, setValue] = useState(store.getState()[name]);

  useEffect(() => {
    if(update) {
      const subscribe = store.subscribe(state => setValue(state[name]));
      return () => subscribe.unsubscribe();
    }
  }, [name, store, update])

  return value;
}

export default useStore;
