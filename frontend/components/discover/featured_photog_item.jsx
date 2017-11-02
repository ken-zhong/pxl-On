import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';
import { connect } from 'redux';

// MUST PASS user in as props
const FeaturedPhotog = (props) => {
  let userProfileUrl, bodyPhoto;
  if (props.user.profilePhotoUrl) {
    userProfileUrl = {backgroundImage: `url(${props.user.profilePhotoUrl})`};
  }
  if (props.photoBig && props.user.featuredPhoto) {
    bodyPhoto = (
      <Link to={`/${props.user.username}`} className='featured-photog-photo-big'>
        <img src={props.user.featuredPhoto.preview_url} />
      </Link>
    );
  } else if (!props.photoBig) {
    let photos = props.user.thumbnails.slice(0, 5).map((photo, idx) => (
      <img src={photo} key={idx} />
    ));
    bodyPhoto = (
      <div className='featured-photag-thumbnail-container'>
        { photos }
      </div>
    );
  }

  return (
    <div className='featured-photog-item'>
      <header>
        <div className='follow-user-item-info'>
          <Link to={`/${props.user.username}`}>
            <div className='nav-user-icon' style={userProfileUrl} />
          </Link>
          <div>
            <Link to={`/${props.user.username}`}><h4>{props.user.username}</h4></Link>
          </div>
        </div>
        <FollowButton user={props.user} />
      </header>
      { bodyPhoto }
    </div>
  );
};

export default FeaturedPhotog;
// export default connect(mapStateToProps, null)(FeaturedPhotog)
