import React, { useEffect, useState } from 'react';
import { Button, Logo } from '../../components';
import data from './data';
import Feature from './Feature';
import { host } from '../../constant';
import Testimonial from './Testimonial';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const isSignedIn = localStorage.getItem('accessToken');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch(host + 'galleries');
      const json = await response.json();
      setTestimonials(json);
      // console.log(json);
    };
    request();
  }, []);

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

        <section id='testimonials'>
          <h3
            className='section-title'
            style={{ color: '#fff', margin: '110px 0 0 93px' }}
          >
            Testimonials
          </h3>
          <Carousel
            showArrows
            showIndicators
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  className='slide-controls'
                  id='prev-slide'
                >
                  ←
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  className='slide-controls'
                  id='next-slide'
                >
                  →
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{
                      background: '#F063B8',
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                    className='slide-indicator'
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  className='slide-indicator'
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role='button'
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {testimonials.map(item => (
              <Testimonial {...item} key={item.id} />
            ))}
          </Carousel>
        </section>
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
