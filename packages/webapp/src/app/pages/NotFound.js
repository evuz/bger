import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

function NotFound() {
  return (
    <div className="Page NotFound">
      <h1 className="NotFound__code">404</h1>
      <h4 className="NotFound__message">Oops! Looks like you are headed the wrong away!</h4>
      <Link to="/">
        <Button color="accent">Go Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
