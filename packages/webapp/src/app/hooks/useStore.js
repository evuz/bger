import { useState, useEffect } from 'react';
import { ConfigSymbols } from '@bger/domain'

import domain from '../domain';


function useStore(name) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const store = domain.getConfig({ key: ConfigSymbols.Adapters }).get('store');
    const subscribe = store.subscribe(state => setValue(state[name]));
    return () => subscribe.unsubscribe();
  }, [name])

  return value;
}

export default useStore;
