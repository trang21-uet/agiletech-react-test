import React from 'react';
import { Logo, Button } from '../../components';

export default function Login() {
  return (
    <div
      className='container'
      style={{ position: 'relative', height: '100vh' }}
    >
      <Logo />
      <div
        id='form'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: '64px', marginBottom: '28px' }}>Sign In</h1>
        <div style={{ width: '100%', marginBottom: '46px' }}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            style={{
              width: '100%',
              height: '57px',
              borderRadius: '6px',
              marginTop: '12px',
              fontSize: '20px',
              padding: '0 1rem',
              border: '1px solid #000',
              outline: 'none',
            }}
          />
        </div>
        <Button width='100%'>Sign in</Button>
      </div>
    </div>
  );
}
