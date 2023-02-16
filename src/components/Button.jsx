import React from 'react';

export default function Button(props) {
  return (
    <button
      {...props}
      className='global-btn'
      style={{
        width: props.width,
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
}
