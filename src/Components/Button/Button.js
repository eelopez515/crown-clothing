import React from 'react';
import './Button.sass';

function Button({ children, isGoogleSignIn, inverted, ...props }) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google__sign__in' : ''
      } button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
