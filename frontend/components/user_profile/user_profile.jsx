import React from 'react';
import ReactModal from 'react-modal';
import ProfileEditModal from './user_profile_edit_modal';
import FollowButton from '../follows/follow_button';
import FollowModal from '../follows/follows_modal';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editModalOpen: false,
      followersModalOpen: false,
      followingModalOpen: false
    };
  }

  componentDidMount () {
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
    this.props.fetchUserPhotos(username);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      let username = nextProps.match.params.username;
      this.props.fetchUserPhotos(username);
      this.props.fetchUser(username);
    } else if (this.props.errors.app.includes('User not found')) {
      this.props.history.push('/oops');
    }
  }

  closeModal () {
    document.body.style.overflow = 'auto';
    this.setState({editModalOpen: false});
  }

  openModal () {
    document.body.style.overflow = 'hidden';
  }

  render () {
    let coverUrl, profilePhotoUrl;
    [coverUrl, profilePhotoUrl] = this.getUserUrls();

    let photos;
    if (this.props.photos.length > 0) {
      photos = this.props.photos.map((photo, idx) => {
        return (
          <div className='photo-preview-container' key={idx}>
            <img src={photo.preview_url} />
          </div>
        );
      });
    } else {
      photos = (<div className='flex-center container no-photos-warning'
        style={{padding: '5em'}}>
        No photos uploaded yet!</div>);
    }

    let profileBtn;
    if (this.props.loggedIn && this.props.currentUser.id === this.props.user.id) {
      profileBtn = <span onClick={() => this.setState({editModalOpen: true})}
        className='profile-edit-btn'>Edit Profile</span>;
    } else {
      profileBtn = <FollowButton user={this.props.user} profile='true' />;
    }

    return (
      <div>
        <div style={coverUrl} className='cover-image'>
          {profileBtn}
        </div>
        <div className='user-profile-masthead'>
          <span style={profilePhotoUrl} className='profile-photo' />
          <h1 className='profile-header'>{this.props.user.username}</h1>
          <div className='user-profile-subheader-text'>
            <span>{this.props.user.numFollowers} Followers</span>
            <span>{this.props.user.numFollowing} Following</span>
          </div>
        </div>
        <div className='photos-grid'>
          { photos }
        </div>
        <ReactModal isOpen={this.state.editModalOpen} className='profile-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
          <div>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
          </div>
          <ProfileEditModal setProfilePhoto={this.props.setProfilePhoto}
            oldProfileUrl={this.props.user.profilePhotoUrl}
            setCoverPhoto={this.props.setCoverPhoto}
            photos={this.props.photos}
            currentUser={this.props.currentUser} />
        </ReactModal>
      </div>
    );
  }

  getUserUrls () {
    let coverUrl;
    if (this.props.user.coverPhotoUrl) {
      coverUrl = {
        backgroundImage: `url(${this.props.user.coverPhotoUrl})`,
        height: '70vh'
      };
    } else {
      coverUrl = {
        height: '7em',
        backgroundColor: 'light-grey'
      };
    }
    let profilePhotoUrl;
    if (this.props.user.profilePhotoUrl) {
      profilePhotoUrl = {
        backgroundImage: `url(${this.props.user.profilePhotoUrl})`
      };
    } else {
      profilePhotoUrl = {};
    }
    return [coverUrl, profilePhotoUrl];
  }
}

export default UserProfile;
