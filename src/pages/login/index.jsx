import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, Button } from '../../components';
import { host } from '../../constant';

export default function Login() {
  const [username, setUsername] = useState('');
  const [empty, setEmpty] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);
  const nav = useNavigate();

  const signIn = async () => {
    setWrongUsername(false);
    setEmpty(false);
    if (!username) {
      setEmpty(true);
    } else {
      const response = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      const json = await response.json();
      if (json?.code === 401) {
        setWrongUsername(true);
      } else {
        localStorage.setItem('accessToken', json.accessToken);
        localStorage.setItem('refreshToken', json.refreshToken);
        nav('/');
      }
      console.log(json);
    }
  };

  return (
    <div
      className='container'
      style={{ position: 'relative', height: '100vh' }}
    >
      <Logo />
      <form
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
        onSubmit={event => {
          event.preventDefault();
          signIn();
        }}
      >
        <h1 style={{ fontSize: '64px', marginBottom: '28px' }}>Sign In</h1>
        <div style={{ width: '100%', marginBottom: '46px' }}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={event => setUsername(event.target.value)}
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
          <p style={{ color: empty || wrongUsername ? '#f00' : 'transparent' }}>
            {empty && 'Username is required'}
            {wrongUsername && 'Wrong username'}
          </p>
        </div>
        <Button type='submit' width='100%'>
          Sign in
        </Button>
      </form>
    </div>
  );
}
