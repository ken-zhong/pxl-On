import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => (
  <header>
    <nav className='flex-center navbar'>
      <div className='flex-center'>
        <Link to='/' className='nav-link nav-logo font-maven flex-center'>pxl-On</Link>
        <ul className='flex-center'>
          <li><a className='nav-link' href='#'>Discover</a></li>
          <li><a className='nav-link' href='#'>About</a></li>
        </ul>
      </div>
      <div className='flex-center'>
        <span className='flex-center'><Link className='nav-link' to='/login'>Log In</Link></span>
        <Link to='/signup' className='flex-center signup-nav-btn'>Sign Up</Link>
      </div>
    </nav>
  </header>
);

export default SplashHeader;
