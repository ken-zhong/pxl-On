import React from 'react';

const SplashHeader = () => (
  <header>
    <nav className='flex-center navbar'>
      <div className='flex-center'>
        <a href='#' className='nav-link nav-logo font-maven flex-center'>pxl-On</a>
        <ul className='flex-center'>
          <li><a className='nav-link' href='#'>Discover</a></li>
          <li><a className='nav-link' href='#'>About</a></li>
        </ul>
      </div>
      <div className='flex-center'>
        <span className='flex-center'><a className='nav-link' href='./login.html'>Log In</a></span>
        <a href='#' className='flex-center signup-nav-btn'>Sign Up</a>
      </div>
    </nav>
  </header>
);

export default SplashHeader;
