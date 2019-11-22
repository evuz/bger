import React, { useState, useEffect } from 'react';
import { UserSymbols } from '@bger/domain';

import useDomain from './hooks/useDomain';

import Routes from './router/Routes';
import Loading from './pages/Loading';

function App() {
  const [isAppInit, initApp] = useState(false);
  const [userData, getUser] = useDomain(UserSymbols.UseCases.GetUser);

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 1000);
  }, [getUser]);

  useEffect(() => {
    const { data, error } = userData;
    if (data || error) {
      initApp(true);
    }
  }, [userData]);

  if (!isAppInit) {
    return <Loading />;
  }

  return <Routes />;
}

export default App;
