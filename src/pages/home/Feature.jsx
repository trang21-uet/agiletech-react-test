import React from 'react';

const Feature = ({ image, label, content, link, bg }) => {
  return (
    <div
      className='feature'
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <img className='feature-img' src={image} alt='' />
      <img className='feature-bg' src={bg} alt='' />
      <div className='feature-info'>
        <h5
          className='label'
          style={{ fontSize: '24px', lineHeight: '31.2px', fontWeight: '400' }}
        >
          {label}
        </h5>
        <p style={{ margin: '20px 0', fontSize: '16px' }}>{content}</p>
        <a href={link} style={{ fontWeight: 'bold', width: 'fit-content' }}>
          Learn more
          <i
            style={{
              color: '#9C69E2',
              fontSize: '32px',
            }}
          >
            →
          </i>
        </a>
      </div>
    </div>
  );
};

export default Feature;
