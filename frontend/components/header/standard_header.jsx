import React from 'react';
import { Link } from 'react-router-dom';
import NavUser from './nav_user';
import NavAuth from './nav_auth.jsx';

class StandardHeader extends React.Component {
  render () {
    let navComponentRight;
    if (this.props.loggedIn) {
      navComponentRight = <NavUser logout={this.props.logout} currentUser={this.props.currentUser} />;
    } else {
      navComponentRight = <NavAuth />;
    }

    return (
      <div>
        <header>
          <nav className='flex-center navbar navbar-std'>
            <div className='flex-center nav-component nav-left'>
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
            { navComponentRight }
          </nav>
        </header>
      </div>
    );
  }
}

export default StandardHeader;
