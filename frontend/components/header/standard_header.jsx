import React from 'react';
import { Link } from 'react-router-dom';

const StandardHeader = (props) => (
  <header>
    <nav className='flex-center navbar navbar-std'>
      <div className='flex-center nav-component'>
        <Link to='/' className='nav-logo flex-center'>pxl-On</Link>
        <ul className='flex-center'>
          <li><a className='nav-link' href='#'>Discover</a></li>
          <li><a className='nav-link' href='#'>About</a></li>
        </ul>
      </div>
      <div className='flex-center nav-component'>
        <span className='flex-center'><Link className='nav-link' to='/login'>Log In</Link></span>
        <Link to='/signup' className='flex-center signup-nav-btn'>Sign Up</Link>
      </div>
    </nav>
  </header>
);

export default StandardHeader;
