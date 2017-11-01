import React from 'react';

const AboutPage = props => {
  return (
    <div className='fadeIn'>
      <div className='about-background-img-container'>
        <div className='splash-text'>
          <h1>pxl-On</h1>
          <p>Share your best photos, discover inspiration, and find new photo friends!</p>
        </div>
      </div>
      <div className='about-text'>
        <p> pxl-On is a full-stack SPA (single page application) built using
          React/Redux on the frontend and Ruby on Rails on the backend. Database
          duties are handled by a postgreSql server and Amazon AWS S3 buckets for
          photos.
        </p>
        <p>
          For more details, you can find me on:
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
