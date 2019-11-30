import { useState, useCallback, useEffect } from 'react';

import domain from '../domain';

function useDomain(useCase, autoExecute = false) {
  const [response, setResponse] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const exec = useCallback(function (...args) {
    setResponse({ data: null, error: null, loading: true });
    domain
      .get({ useCase })
      .execute(...args)
      .then(results => {
        setResponse({ data: results, error: null, loading: false });
      })
      .catch(error => {
        setResponse({ error, data: null, loading: false });
      });
  }, [useCase])

  useEffect(() => {
    if(autoExecute) {
      exec();
    }
  }, [autoExecute, exec]);

  return [response, exec];
}

export default useDomain;
