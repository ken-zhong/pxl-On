import React from 'react';
import { Link } from 'react-router-dom';

const NavAuth = props => (
  <div className='flex-center nav-component'>
    <span className='flex-center'><Link className='nav-link' to='/login'>Log In</Link></span>
    <Link to='/signup' className='flex-center signup-nav-btn'>Sign Up</Link>
  </div>
);

export default NavAuth;
