import React from 'react';
import FollowButton from './follow_button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserItem extends React.Component {
  render () {
    let user = this.props.userState || this.props.user;
    let userProfileUrl = {};
    if (user.profilePhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${user.profilePhotoUrl})`};
    }
    return (
      <div className='follow-user-item'>
        <div className='follow-user-item-info'>
          <div className='nav-user-icon' style={userProfileUrl} />
          <div>
            <Link to={`/${user.username}`} className='follow-user-link'
              onClick={this.props.closeModal}>{user.username}</Link>
            <br />
            <span>{user.numFollowers} followers</span>
          </div>
        </div>
        <FollowButton user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  {userState: state.entities.users[ownProps.user.username]}
);

export default connect(mapStateToProps, null)(UserItem);
