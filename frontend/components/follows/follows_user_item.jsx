import React from 'react';
import FollowButton from './follow_button';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  let user = props.user;
  let userProfileUrl = {};
  if (user.profilePhotoUrl) {
    userProfileUrl = {backgroundImage: `url(${user.profilePhotoUrl})`};
  }
  return (
    <div className='follow-user-item'>
      <div>
        <div className='nav-user-icon' style={userProfileUrl} />
        <div>
          <Link to={`/${user.username}`} className='follow-user-link'>{user.username}</Link>
          <br />
          <span>{user.numFollowers} followers</span>
        </div>
      </div>
      <FollowButton user={user} />
    </div>
  );
};

export default UserItem;
