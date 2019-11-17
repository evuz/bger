import { useState } from 'react';

import domain from '../domain';

function useDomain(useCase, initVal = null, execute = null) {
  const [response, setResponse] = useState({
    data: initVal,
    loading: false,
    error: null,
  });

  function exec(...args) {
    setResponse({ data: response.data, error: null, loading: true });
    domain
      .get({ useCase })
      .execute(...args)
      .then(results => {
        if(execute) {
          execute(results);
        }
        setResponse({ data: results, error: null, loading: false });
      })
      .catch(error => {
        setResponse({ error, data: initVal, loading: false });
      });
  }

  return [response, exec];
}

export default useDomain;
