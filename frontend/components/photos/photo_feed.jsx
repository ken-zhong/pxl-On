import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import FollowModal from '../follows/follows_modal';
import PhotoFeedItem from './photo_feed_item';
import FeaturedPhotog from '../discover/featured_photog_item';

class PhotoFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photoArray: [],
      followersModalOpen: false,
      followingModalOpen: false
    };
  }

  componentDidMount () {
    // this.props.getAllFollows();
    this.props.fetchUsers();
    this.props.fetchPhotoFeed();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser.numFollowing !== this.props.currentUser.numFollowing) {
      this.props.fetchPhotoFeed();
    }
  }

  closeModal () {
    document.body.style.overflow = 'auto';
    this.setState({
      followersModalOpen: false,
      followingModalOpen: false
    });
  }
  openModal () {
    document.body.style.overflow = 'hidden';
  }

  render () {
    let currentUser = this.props.currentUser;
    let userProfileUrl, photoFeedItems, suggestedFollows;
    if (currentUser.coverPhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${currentUser.profilePhotoUrl})`};
    }
    if (this.props.photos.length > 0) {
      photoFeedItems = this.props.photos.map((photo, idx) => {
        return <PhotoFeedItem photo={photo} key={idx} />;
      });
    } else {
      photoFeedItems = (
        <div className='no-feed-msg'>
          You're not following anyone yet!
          <br />
          <Link to='/discover'>Discover some photos now</Link>
        </div>
      );
    }
    if (this.props.suggestedFollows.length > 0) {
      suggestedFollows = this.props.suggestedFollows.map((user, idx) => (
        <FeaturedPhotog user={user} key={idx} />
      ));
    } else {
      suggestedFollows = <h4>Check back later...</h4>;
    }

    return (
      <div className='photo-feed-page'>
        <div className='photo-feed-item-container'>
          { photoFeedItems }
        </div>

        <div className='feed-sidecol slideUp'>
          <div className='feed-currentuser'>
            <div className='follow-user-item-info'>
              <Link to={`/${currentUser.username}`}>
                <div className='nav-user-icon' style={userProfileUrl}></div>
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
              <span onClick={() => this.setState({followersModalOpen: true})} >
                <h5>{currentUser.numFollowers}</h5>
                Followers
              </span>
              <span onClick={() => this.setState({followingModalOpen: true})} >
                <h5>{currentUser.numFollowing}</h5>
                Following
              </span>
            </div>
          </div>
          <div className='suggested-follows-container'>
            <h3>WHO TO FOLLOW</h3>
            { suggestedFollows }
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
