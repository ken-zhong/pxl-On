import React from 'react';

const AboutPage = props => {
  return (
    <div className='fadeIn'>
      <div className='background-img-container'>
        <div className='splash-text'>
          <h1>pxl-On</h1>
          <p>Share your best photos, discover inspiration, and find new photo friends!</p>
        </div>
      </div>
      <div className='about-text'>
        <p> pxl-On is a full-stack SPA (single page application) inspired by 500px and Instragram.
          It uses React/Redux on the frontend and a Ruby on Rails RESTful API on the backend.
          Database duties are handled by a PostgreSQL server and Amazon AWS S3 buckets for
          photos.
        </p>
        <p>
          Find me on:
          <a href='https://github.com/ken-zhong'>
            <i className='fa fa-github fa-2x' aria-hidden='true' />
          </a>
          <a href='#'>
            <i className='fa fa-linkedin-square fa-2x' aria-hidden='true' />
          </a>
        </p>

      </div>
    </div>
  );
};

export default AboutPage;
