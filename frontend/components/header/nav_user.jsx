import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class UserNavComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {showDropdown: false};
  }

  dropdownEnter () {
    this.setState({showDropdown: true});
  }

  dropdownLeave () {
    this.setState({showDropdown: false});
  }

  render () {
    let dropdownClass = this.state.showDropdown ? 'nav-dropdown visible' : 'nav-dropdown';

    return (
      <div className='flex-center nav-component'>
        <span onMouseEnter={this.dropdownEnter.bind(this)}
          onMouseLeave={this.dropdownLeave.bind(this)}
          className='nav-user-profile flex-center'>DROPDOWN
          <ul className={dropdownClass}>
            <li>My Profile</li>
            <li>Following</li>
            <li>Followers</li>
            <li onClick={this.props.logout}>Logout</li>
          </ul>
        </span>
        <Link to='/' className='nav-btn-tall flex-center'>
          <i className='fa fa-cloud-upload display-if' aria-hidden='true' />
          <span className='nav-link-text'>Upload</span>
        </Link>
      </div>
    );
  }
}

export default UserNavComponent;
