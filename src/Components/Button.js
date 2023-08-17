/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type = 'button',
  color = 'white',
  disabled,
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{ backgroundColor: `var(--${color})` }}
      onClick={onClick}
      className={`border-${color} button ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
