import React from 'react';
import { Link } from 'react-router-dom';

import useInput from '../hooks/useInput';
import useDomain from '../hooks/useDomain';

import Button from '../components/Button';
import Input from '../components/Input';
import { AuthSymbols } from '@bger/domain';

function Login() {
  const { validation, ...email } = useInput('');
  const password = useInput('');

  const [, execlogin] = useDomain(AuthSymbols.UseCases.Login, null, loginResponse => {
    console.log('USER', loginResponse);
  });

  function login(e) {
    e.preventDefault();
    execlogin({ email: email.value, password: password.value });
  }

  return (
    <div className="Page Login">
      <h1 className="Login__title">Sign in</h1>
      <form onSubmit={login} className="Login__form">
        <div className="Login__content">
          <div className="Login__welcome">
            <h3>Hello</h3>
            <h6 className="Login__secondary-text">Enter your credentials to continue</h6>
          </div>
          <Input label="E-mail" name="email" {...email} />
          <Input label="Password" name="password" type="password" {...password} />
          <div className="Login__btn">
            <Button type="submit" color="dark" full>
              Login
            </Button>
          </div>
          <div className="Login__social-login">
            <p className="Login__secondary-text">Do you have a social account?</p>
            <Link to="/sign-in" className="Login__social-btn">Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
