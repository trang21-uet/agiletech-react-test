import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Testimonials({ data }) {
  return (
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
        {data.map(item => (
          <Testimonial {...item} key={item.id} />
        ))}
      </Carousel>
    </section>
  );
}

const Testimonial = ({ desctiption, imageUrl }) => {
  return (
    <div className='testimonial'>
      <div className='row'>
        <div>
          <img src={imageUrl} alt='' />
        </div>
        <div>
          <b>John Fang</b>
          <p style={{ color: '#9C69E2' }}>wordfaang.com</p>
        </div>
      </div>
      <div className='row'>
        <div></div>
        <p className='description'>{desctiption}</p>
      </div>
    </div>
  );
};
