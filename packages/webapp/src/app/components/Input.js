import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInputTouch from '../hooks/useInputTouch';
import filterClassnames from '../utils/filterClassNames';

function Input({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  type,
  validation,
}) {
  const [focus, setFocus] = useState(false);
  const isTouch = useInputTouch(value);
  const showError = !focus && isTouch && !validation.isValid;
  const containerClass = {
    'Input__formField': true,
    'Input__formField--focus': focus,
    'Input__formField--disabled': disabled,
    'Input__formField--error': showError,
    'Input__formField--active': !!value | focus,
  };
  let error;
  if (showError) {
    const errorKey = Object.keys(validation.errors)[0];
    error = validation.errors[errorKey];
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
