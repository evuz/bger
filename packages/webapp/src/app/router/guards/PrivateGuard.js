import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useStore from '../../hooks/useStore';

function PrivateGuard({ children, ...rest }) {
  const user = useStore('user');
  return <Route {...rest} render={() => (user ? children : <Redirect to="/login" />)} />;
}

export default PrivateGuard;
