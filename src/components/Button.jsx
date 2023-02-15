import React from 'react';

export default function Button({ children, width, style, to }) {
  return (
    <a
      href={to || '/'}
      style={{
        height: '60px',
        backgroundColor: '#9C69E2',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        width: width,
        ...style,
      }}
    >
      {children}
    </a>
  );
}
