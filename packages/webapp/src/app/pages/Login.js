import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useInput from '../hooks/useInput';
import useDomain from '../hooks/useDomain';
import Validators from '../utils/validators';

import Button from '../components/Button';
import Input from '../components/Input';
import { AuthSymbols } from '@bger/domain';

function Login() {
  const history = useHistory();
  const email = useInput('', [Validators.required]);
  const password = useInput('', [Validators.required]);
  const validForm = ![email.validation.isValid, password.validation.isValid].includes(false);
  const [user, execlogin] = useDomain(AuthSymbols.UseCases.Login, null);

  useEffect(() => {
    if (user.data) {
      history.push('/select-league');
    }
  }, [user, history]);

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
            <h2>Hello</h2>
            <h4 className="Login__secondary-text">Enter your credentials to continue</h4>
          </div>
          <Input label="E-mail" name="email" {...email} />
          <Input label="Password" name="password" type="password" {...password} />
          <div className="Login__btn">
            <Button disabled={!validForm} type="submit" color="dark" full>
              Login
            </Button>
          </div>
          <div className="Login__social-login">
            <p className="Login__secondary-text">Do you have a social account?</p>
            <Link to="/sign-in" className="Login__social-btn">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
