import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`rounded-full px-6 py-3 font-semibold text-sm ${className}`}>
      {children}
    </button>
  );
}

export default Button; 