import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => (
  <div className='splash'>
    <div className='splash-text'>
      <p>Find inspiration and share your best photos</p>
      <Link to='/signup'>Join pxl-On</Link>
    </div>
  </div>
);

export default Splash;
