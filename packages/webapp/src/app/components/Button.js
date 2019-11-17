import React from 'react';
import PropTypes from 'prop-types';
import filterClassnames from '../utils/filterClassNames';

function Button({ children, type, full, disabled, color, onClick }) {
  const colorClass = `Button--${color}`;
  const classnames = {
    Button: true,
    [colorClass]: true,
    'Button--full': full,
  };

  return (
    <button className={filterClassnames(classnames)} type={type} disabled={disabled} onClick={onClick}>
      {children}
      {disabled ? <div className="Button__overlay"></div> : null}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
  color: PropTypes.oneOf(['dark', 'black', 'light', 'primary', 'accent', 'highlight']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  full: false,
  color: 'primary',
  type: 'button',
  onClick: function() {},
};

export default Button;
