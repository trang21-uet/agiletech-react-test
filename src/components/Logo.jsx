import React from 'react';

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '10px',
          backgroundColor: '#9C69E2',
          marginRight: '5px',
        }}
      ></div>
      <div
        style={{
          width: '20px',
          height: '35px',
          borderRadius: '10px',
          backgroundColor: '#F063B8',
        }}
      ></div>
    </div>
  );
}
