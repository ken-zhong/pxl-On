import React from 'react';

const SplashHeader = () => (
  <header>
    <nav className='flex-center navbar'>
      <div className='flex-center'>
        <a href='#' className='nav-logo font-maven flex-center'>pxl-ON</a>
        <ul className='flex-center'>
          <li><a href='#'>Discover</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </div>
      <div className='flex-center'>
        <span className='flex-center'><a href='./login.html'>Log In</a></span>
        <a href='#' className='flex-center signup-nav-btn'>Sign Up</a>
      </div>
    </nav>
  </header>
);

export default SplashHeader;
