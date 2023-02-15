import React from 'react';
import { Button, Logo } from '../../components';
import data from './data';

export default function Home() {
  const isSignedIn = localStorage.getItem('accessToken');

  return (
    <div className='container'>
      <header>
        <div
          className='header'
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Logo />
          {isSignedIn ? (
            <div style={{ display: 'flex' }}>
              <Button width='208px' style={{ marginRight: '31px' }}>
                Profile
              </Button>
              <Button width='208px'>Log out</Button>
            </div>
          ) : (
            <Button width='208px'>Sign In</Button>
          )}
        </div>
        <div
          className='banner'
          style={{
            marginTop: '130px',
            position: 'relative',
          }}
        >
          <div style={{ paddingBottom: '49.69px' }}>
            <h1
              style={{
                fontSize: '80px',
                maxWidth: '60%',
                lineHeight: '88px',
                fontFamily: 'Helvetica',
                fontWeight: '700',
                color: '#212353',
              }}
            >
              Save your data storage here.
            </h1>
            <p
              style={{
                color: '#4B5D68',
                maxWidth: ' 33%',
                fontSize: '18px',
                lineHeight: '28px',
                marginTop: '49.69px',
              }}
            >
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <Button width='168.94px' style={{ marginTop: '46.69px' }}>
              Learn more
            </Button>
          </div>
          <img
            src={require('../../assets/banner.png')}
            alt='banner'
            style={{
              width: '759.25px',
              height: '401.49px',
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        </div>
      </header>
      <main
        style={{
          margin: '164.29px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3
          style={{
            fontSize: '40px',
            lineHeight: '52px',
          }}
          className='text-center'
        >
          Features
        </h3>
        <p
          className='text-center'
          style={{ margin: '49.24px auto', maxWidth: '50%' }}
        >
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
        <div className='grid'>
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

const Card = ({ image, label, content, link, bg }) => {
  return (
    <div className='grid-item' style={{ backgroundImage: `url(${bg})` }}>
      <img src={image} alt='' />
      <div>
        <h5
          className='label'
          style={{ fontSize: '24px', lineHeight: '31.2px' }}
        >
          {label}
        </h5>
        <p style={{ margin: '20px 0', fontSize: '16px' }}>{content}</p>
      </div>
      <a href={link}>Learn more</a>
    </div>
  );
};
