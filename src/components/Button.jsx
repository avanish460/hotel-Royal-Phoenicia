import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 font-semibold text-sm ${className}`}>
      {children}
    </button>
  );
}

export default Button; 