import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const nav = useNavigate();
  return (
    <button className='app-logo' onClick={() => nav('/')}>
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
    </button>
  );
}
