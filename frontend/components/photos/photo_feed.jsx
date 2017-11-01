import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';
import ReactModal from 'react-modal';
import FollowModal from '../follows/follows_modal';

class PhotoFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photoArray: [],
      followersModalOpen: false,
      followingModalOpen: false
    };
  }

  closeModal () {
    document.body.style.overflow = 'auto';
    if (this.state.followersModalOpen || this.state.followingModalOpen) {
      this.props.fetchUser(this.props.currentUser.username);
    }
    this.setState({
      followersModalOpen: false,
      followingModalOpen: false
    });
  }
  openModal () {
    document.body.style.overflow = 'hidden';
  }

  componentDidMount () {
    this.props.fetchPhotoFeed();
    this.props.getAllFollows();
  }

  render () {
    let currentUser = this.props.currentUser;
    let userProfileUrl;
    if (currentUser.coverPhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${currentUser.profilePhotoUrl})`};
    }

    return (
      <div className='photo-feed-page'>
        <div className='photo-feed-item-container'>
          <div>feed component</div>
        </div>

        <div className='feed-currentuser mobile-hide'>
          <div className='follow-user-item-info'>
            <Link to={`/${currentUser.username}`}>
              <div className='nav-user-icon' style={userProfileUrl} />
            </Link>
            <div>
              <Link to={`/${currentUser.username}`}><h4>{currentUser.username}</h4></Link>
            </div>
          </div>
          <div className='follow-user-item-subrow'>
            <span><Link to={`/${currentUser.username}`}>
              <h5>{currentUser.photos.length}</h5>
              Photos
            </Link></span>
            <span>
              <h5>{currentUser.numFollowers}</h5>
              Followers
          </span>
            <span>
              <h5>{currentUser.numFollowing}</h5>
              Following
            </span>
          </div>
        </div>


        <ReactModal isOpen={this.state.followersModalOpen} className='follow-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
          <div className='follow-header'>
            <h4>Followers </h4>
            <span> {currentUser.numFollowers}</span>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
          </div>
          <FollowModal closeModal={this.closeModal.bind(this)}
            user={currentUser} type='followers' />
        </ReactModal>

        <ReactModal isOpen={this.state.followingModalOpen} className='follow-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
          <div className='follow-header'>
            <h4>Following </h4>
            <span> {currentUser.numFollowing}</span>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
          </div>
          <FollowModal closeModal={this.closeModal.bind(this)}
            user={currentUser} type='following' />
        </ReactModal>
      </div>

    );
  }
}

export default PhotoFeed;
