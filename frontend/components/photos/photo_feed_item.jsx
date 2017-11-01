import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FollowButton from '../follows/follow_button';

const PhotoFeedItem = (props) => {

  return (
    <div className='photo-feed-item'>
      <div>Title</div>
      <div className='photo-feed-img-container'><img src={props.photo.large_url} /></div>
      <div>Description</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.photo.author];
  return {
    user: author
  };
};

export default connect(mapStateToProps, null)(PhotoFeedItem);
