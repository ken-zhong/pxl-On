limport React from 'react';
import ReactModal from 'react-modal';
import ProfileEditModal from './user_profile_edit_modal';
import FollowButton from '../follows/follow_button';
import FollowModal from '../follows/follows_modal';
import { Link } from 'react-router-dom';

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
    this.props.fetchUser(username).then(null,
      () => this.props.history.push('/oops'));
    this.props.fetchUserPhotos(username);
  }

  componentWillReceiveProps (nextProps) {
    let username = nextProps.match.params.username;
    if (this.props.match.url !== nextProps.match.url) {
      window.scrollTo(0, 0);
      this.props.fetchUser(username).then(null,
        () => this.props.history.push('/oops'));
      this.props.fetchUserPhotos(username);
    }
  }

  componentWillUnmount () {
    this.props.clearPhotos();
  }

  closeModal () {
    document.body.style.overflow = 'auto';

    if (this.state.followersModalOpen || this.state.followingModalOpen) {
      this.props.fetchUser(this.props.match.params.username);
    }

    this.setState({
      editModalOpen: false,
      followersModalOpen: false,
      followingModalOpen: false
    });
  }

  openModal () {
    document.body.style.overflow = 'hidden';
  }

  render () {
    let coverUrl, profilePhotoUrl;
    [coverUrl, profilePhotoUrl] = this.getUserUrls();

    let photos, noPhotosWarning;
    if (this.props.photos.length > 0) {
      photos = this.props.photos.map((photo, idx) => {
        return (
          <Link to={`/photos/${photo.id}`} className='photo-preview-container' key={idx}>
            <img src={photo.preview_url} />
            <div className='photo-preview-overlay'>{photo.title}</div>
          </Link>
        );
      });
    } else {
      noPhotosWarning = (<div className='flex-center container no-photos-warning'
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
            <span onClick={() => this.setState({followersModalOpen: true})} className='hover-blue'>
              {this.props.user.numFollowers} Followers
            </span>
            <span onClick={() => this.setState({followingModalOpen: true})} className='hover-blue'>
              {this.props.user.numFollowing} Following
            </span>
          </div>
        </div>
        <div className='photos-grid'>
          { noPhotosWarning }
          <div className='masonry-grid'>
            { photos }
          </div>
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

        <ReactModal isOpen={this.state.followersModalOpen} className='follow-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
          <div className='follow-header'>
            <h4>Followers </h4>
            <span> {this.props.user.numFollowers}</span>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
          </div>
          <FollowModal closeModal={this.closeModal.bind(this)}
            user={this.props.user} type='followers' />
        </ReactModal>

        <ReactModal isOpen={this.state.followingModalOpen} className='follow-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
          <div className='follow-header'>
            <h4>Following </h4>
            <span> {this.props.user.numFollowing}</span>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
          </div>
          <FollowModal closeModal={this.closeModal.bind(this)}
            user={this.props.user} type='following' />
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
