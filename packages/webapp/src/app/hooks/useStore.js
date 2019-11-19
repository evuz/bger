import { useState } from 'react';
import { ConfigSymbols } from '@bger/domain'

import domain from '../domain';


function useStore(name) {
  const [value, setValue] = useState(null);

  const store = domain.getConfig({ key: ConfigSymbols.Adapters }).get('store');

  store.subscribe(state => {
    setValue(state[name]);
  });

  return value;
}

export default useStore;
