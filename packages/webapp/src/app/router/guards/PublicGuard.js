import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useStore from '../../hooks/useStore';

function PublicGuard({ children, ...rest }) {
  const user = useStore('user');
  return <Route {...rest} render={() => (user ? <Redirect to="/not-found" /> : children)} />;
}

export default PublicGuard;
