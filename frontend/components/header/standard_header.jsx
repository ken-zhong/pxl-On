import React from 'react';
import { Link } from 'react-router-dom';
import NavUser from './nav_user';
import NavAuth from './nav_auth.jsx';

const StandardHeader = (props) => (
  <header>
    <nav className='flex-center navbar navbar-std'>
      <div className='flex-center nav-component'>
        <Link to='/' className='nav-logo flex-center'>pxl-On</Link>
        <ul className='flex-center'>
          <li><Link className='nav-link' to='/discover'>
            <i className='fa fa-picture-o' aria-hidden='true' />
            <span className='nav-link-text'>Discover</span>
          </Link></li>
          <li><Link className='nav-link' to='/about'>
            <i className='fa fa-info-circle' aria-hidden='true' />
            <span className='nav-link-text'>About</span>
          </Link></li>
        </ul>
      </div>
      <NavAuth />
    </nav>
  </header>
);

export default StandardHeader;
