import React from 'react';

export default function Button({ children, width, style, to }) {
  return (
    <a
      href={to || '/'}
      className='global-btn'
      style={{
        width: width,
        ...style,
      }}
    >
      {children}
    </a>
  );
}
