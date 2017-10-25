import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = (props) => (
  <header>
    <nav className='flex-center navbar'>
      <div className='flex-center nav-component'>
        <Link to='/' className='nav-link-light nav-logo flex-center'>pxl-On</Link>
        <ul className='flex-center'>
          <li><Link className='nav-link-light' to='/discover'>
            <i className='fa fa-picture-o' aria-hidden='true' />
            <span className='nav-link-text'>Discover</span>
          </Link></li>
          <li><Link className='nav-link-light' to='/about'>
            <i className='fa fa-info-circle' aria-hidden='true' />
            <span className='nav-link-text'>About</span>
          </Link></li>
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
