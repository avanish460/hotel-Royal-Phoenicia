// src/components/Button/Button.jsx
import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`rounded-full px-4 py-2 font-semibold text-sm ${className}`}>
      {children}
    </button>
  );
}

export default Button; // <--- This is the key!