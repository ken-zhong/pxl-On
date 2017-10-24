import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => (
  <header>
    <nav className='flex-center navbar'>
      <div className='flex-center nav-component'>
        <Link to='/' className='nav-link-light nav-logo flex-center'>pxl-On</Link>
        <ul className='flex-center'>
          <li><a className='nav-link-light' href='#'>Discover</a></li>
          <li><a className='nav-link-light' href='#'>About</a></li>
        </ul>
      </div>
      <div className='flex-center nav-component'>
        <span className='flex-center'><Link className='nav-link-light' to='/login'>Log In</Link></span>
        <Link to='/signup' className='flex-center signup-nav-btn signup-nav-btn-light'>Sign Up</Link>
      </div>
    </nav>
  </header>
);

export default SplashHeader;
