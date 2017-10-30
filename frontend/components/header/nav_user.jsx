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
    // onTouchStart={this.toggleDropdown.bind(this)}>
    let dropdownClass = this.state.showDropdown ? 'nav-dropdown visible' : 'nav-dropdown';
    return (
      <div className='flex-center nav-component'>
        <div className='nav-user-profile'
          onMouseEnter={this.dropdownEnter.bind(this)}
          onMouseLeave={this.dropdownLeave.bind(this)}>
          <span className='nav-user-icon flex-center'
            style={{backgroundImage: `url(${this.props.user.profilePhotoUrl})`}}>
            <br />
            <ul className={dropdownClass}>
              <Link to={`/${this.props.currentUser.username}`} className='nav-dropdown-link'>My Profile</Link>
              <li className='nav-dropdown-link'>Manage Photos</li>
              <li className='nav-dropdown-link'>Following</li>
              <li className='nav-dropdown-link'>Followers</li>
              <li className='nav-dropdown-link' onClick={this.logout.bind(this)}>Logout</li>
            </ul>
          </span>
        </div>
        <span onClick={this.showUpload.bind(this)} className='nav-btn-tall flex-center'>
          <i className='fa fa-cloud-upload display-if' aria-hidden='true' />
          <span className='nav-link-text'>Upload</span>
        </span>
      </div>
    );
  }
}

export default UserNavComponent;
