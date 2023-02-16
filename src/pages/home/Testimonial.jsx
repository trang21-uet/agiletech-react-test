import React from 'react';

export default function Testimonial({ desctiption, imageUrl }) {
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
}
