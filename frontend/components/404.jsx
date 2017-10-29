import React from 'react';
import { Link } from 'react-router-dom';

const OopsPage = props => {
  return (
    <div className='err-404'>
      <h1 className='bold-h1'>
        <i className='fa fa-exclamation-triangle error-icon' aria-hidden='true' />
        404
      </h1>
      <p className='text-large'>We all make mistakes from time to time. In this case, the page you're
        trying to reach doesn't exist.</p>
      <p><Link to='/' className='nav-blue'>Click here to head home</Link></p>
    </div>
  );
};


export default OopsPage;
