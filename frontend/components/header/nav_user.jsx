import React from 'react';
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

  toggleDropdown () {
    let show = !this.state.showDropdown;
    this.setState({showDropdown: show});
  }

  showUpload () {
    this.props.toggleUploadModal();
  }

  logout () {
    this.props.logout().then(() => {
      this.props.history.push('/');
    });
  }

  render () {
    let dropdownClass = this.state.showDropdown ? 'nav-dropdown visible' : 'nav-dropdown';
    console.log(this.props);
    return (
      <div className='flex-center nav-component'>
        <span href='#' onMouseEnter={this.dropdownEnter.bind(this)}
          onMouseLeave={this.dropdownLeave.bind(this)}
          onTouchStart={this.toggleDropdown.bind(this)}
          className='nav-user-profile flex-center'>DROPDOWN
          <ul className={dropdownClass}>
            <li>My Profile</li>
            <li>Manage Photos</li>
            <li>Following</li>
            <li>Followers</li>
            <li onClick={this.logout.bind(this)}>Logout</li>
          </ul>
        </span>
        <span onClick={this.showUpload.bind(this)} className='nav-btn-tall flex-center'>
          <i className='fa fa-cloud-upload display-if' aria-hidden='true' />
          <span className='nav-link-text'>Upload</span>
        </span>
      </div>
    );
  }
}

export default UserNavComponent;
