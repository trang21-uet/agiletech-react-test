import React, { useEffect, useState } from 'react';
import { Button, Logo } from '../../components';
import data from './data';
import Feature from './Feature';
import { host } from '../../constant';
import Testimonials from './Testimonials';
import '../../style/home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isSignedIn, setIsSignIn] = useState(
    localStorage.getItem('accessToken')
  );
  const [testimonials, setTestimonials] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(host + 'galleries');
      const json = await response.json();
      setTestimonials(json);
      // console.log(json);
    };
    request();
  }, []);

  const logOut = async () => {
    const response = await fetch(host + 'auth/logout', {
      method: 'DELETE',
    });
    const text = await response.text();
    console.log(text);
    localStorage.clear();
    setIsSignIn(false);
  };

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
              <Button
                onClick={() => nav('/profile')}
                style={{ marginRight: 32 }}
              >
                Profile
              </Button>
              <Button onClick={logOut}>Log out</Button>
            </div>
          ) : (
            <Button onClick={() => nav('/login')}>Sign In</Button>
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
                marginTop: '49.69px',
              }}
            >
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <Button style={{ marginTop: '46.69px', padding: '0 40px' }}>
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
          marginTop: '164.29px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <section id='features'>
          <h3 className='text-center section-title'>Features</h3>
          <p
            className='text-center'
            style={{ margin: '49.24px auto', maxWidth: '50%' }}
          >
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
          <div className='features-grid'>
            {data.map((item, index) => (
              <Feature {...item} key={index} />
            ))}
          </div>
        </section>

        <Testimonials data={testimonials} />
      </main>

      <footer>
        <div className='footer-grid'>
          <div className='column'>
            <div className='title'>
              <Logo />
              <h3 style={{ marginLeft: 20 }}>Dataware house</h3>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p style={{ fontWeight: '500', marginBottom: 10 }}>
                Warehouse Society, 234 <br />
                Bahagia Ave Street PRBW 29281
              </p>
              <p>
                info@warehouse.project
                <br />
                1-232-3434 (Main)
              </p>
            </div>
          </div>
          <div className='column'>
            <div className='title'>
              <h4>About</h4>
            </div>
            <ul className='footer-nav'>
              <li>
                <a href='/'>Profile</a>
              </li>
              <li>
                <a href='/'>Features</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
              <li>
                <a href='/'>DW News</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <div className='title'>
              <h4>Help</h4>
            </div>
            <ul className='footer-nav'>
              <li>
                <a href='/'>Support</a>
              </li>
              <li>
                <a href='/'>Sign up</a>
              </li>
              <li>
                <a href='/'>Guide</a>
              </li>
              <li>
                <a href='/'>Report</a>
              </li>
              <li>
                <a href='/'>Q&A</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <div className='title'>
              <h4>Social Media</h4>
            </div>
            <ul className='socials'>
              <li>
                <div className='social'></div>
              </li>
              <li>
                <div className='social'></div>
              </li>
              <li>
                <div className='social'></div>
              </li>
            </ul>
          </div>
        </div>
        <div className='other-info'>
          <p style={{ fontSize: 12 }}>
            © Datawarehouse™, 2020. All rights reserved.
            <br /> Company Registration Number: 21479524.
          </p>
          <div className='communicate'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='24'
              fill='#9C69E2'
              viewBox='0 0 16 16'
            >
              <path d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
