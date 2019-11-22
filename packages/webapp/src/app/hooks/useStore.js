import { useState, useEffect } from 'react';

import domain from '../domain';

function useStore(name) {
  const store = domain.getConfig({ key: 'adapters' }).get('store');
  const [value, setValue] = useState(store.getState()[name]);

  useEffect(() => {
    const subscribe = store.subscribe(state => setValue(state[name]));
    return () => subscribe.unsubscribe();
  }, [name, store])

  return value;
}

export default useStore;
