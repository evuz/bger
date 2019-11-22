import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useDomain from './hooks/useDomain';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';
import { UserSymbols } from '@bger/domain';

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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
