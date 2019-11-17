import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import PropTypes from 'prop-types';

import useInputTouch from '../hooks/useInputTouch';
import filterClassnames from '../utils/filterClassNames';

function Input({ name, label, placeholder, value, onChange, disabled, type: t, validation }) {
  const [type, setType] = useState(t);
  const [focus, setFocus] = useState(false);
  const isTouch = useInputTouch(value);
  const showError = !focus && isTouch && !validation.isValid;
  const showPasswordIcon = t === 'password';
  const containerClass = {
    Input__formField: true,
    'Input__formField--focus': focus,
    'Input__formField--disabled': disabled,
    'Input__formField--error': showError,
    'Input__formField--active': !!value | focus,
  };
  let passwordIcon = null;
  let error;
  if (showError) {
    const errorKey = Object.keys(validation.errors)[0];
    error = validation.errors[errorKey];
  }
  if (showPasswordIcon) {
    const icon = type === 'password' ? mdiEyeOff : mdiEye;
    const toggle = () => setType(type === 'password' ? 'text' : 'password');
    passwordIcon = (
      <button className="Input__btn-password" type="button" onClick={toggle}>
        <Icon path={icon}></Icon>
      </button>
    );
  }

  return (
    <div className={filterClassnames(containerClass)}>
      <div className="Input">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {passwordIcon}
        <label htmlFor={name}>{label}</label>
      </div>
      <span className="Input__error">{error}</span>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  validation: PropTypes.shape({
    isValid: PropTypes.bool,
    errors: PropTypes.any,
  }),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: null,
  disabled: false,
  type: 'text',
  validation: { isValid: true, errors: {} },
};

export default Input;
