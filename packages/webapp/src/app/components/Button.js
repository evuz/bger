import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import filterClassnames from '../utils/filterClassNames';

function Button({ children, type, full, stl, disabled, color, shadow, onClick }) {
  if (stl === 'outline' && color==='light')  {
    throw Error('Style outline isn\'t compatible with color light')
  }
  const colorClass = `Button--${color}`;
  const styleClass = `Button--${stl}`;
  const classnames = {
    Button: true,
    [colorClass]: true,
    [styleClass]: true,
    'Button--shadow': shadow,
    'Button--full': full,
  };

  const click = useCallback(ev => {
    if (disabled) {
      return;
    }
    onClick(ev);
  }, [disabled, onClick])

  return (
    <button className={filterClassnames(classnames)} type={type} disabled={disabled} onClick={click}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
  color: PropTypes.oneOf(['dark', 'black', 'light', 'primary', 'accent', 'highlight']),
  stl: PropTypes.oneOf(['simple', 'outline']),
  shadow: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  full: false,
  stl: 'simple',
  shadow: false,
  color: 'primary',
  type: 'button',
  onClick: function() {},
};

export default Button;
