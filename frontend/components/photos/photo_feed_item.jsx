import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FollowButton from '../follows/follow_button';

const PhotoFeedItem = (props) => {

  let userProfileUrl;
  if (props.author.profilePhotoUrl) {
    userProfileUrl = {backgroundImage: `url(${props.author.profilePhotoUrl})`};
  }

  return (
    <div className='photo-feed-item'>
      <div className='photo-feed-item-header'>
        <Link to={`/${props.author.username}`}>
          <div className='nav-user-icon' style={userProfileUrl} />
        </Link>
        <div>
          <Link to={`/${props.author.username}`}><h4>{props.author.username}</h4></Link>
        </div>
      </div>
      <div className='photo-feed-img-container'>
        <Link to={`/photos/${props.photo.id}`}><img src={props.photo.large_url} /></Link>
      </div>
      <div className='photo-feed-item-footer'>
        <Link to={`/photos/${props.photo.id}`}><h3>{props.photo.title}</h3></Link>
        <span>{props.photo.description}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.photo.author] || {};
  return {
    author
  };
};

export default connect(mapStateToProps, null)(PhotoFeedItem);
