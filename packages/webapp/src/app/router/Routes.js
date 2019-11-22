import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateGuard from './guards/PrivateGuard';
import PublicGuard from './guards/PublicGuard';

import Login from '../pages/Login';
import Leagues from '../pages/Leagues';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateGuard exact path="/">
          <Leagues />
        </PrivateGuard>
        <PublicGuard path="/login">
          <Login />
        </PublicGuard>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
