import React from 'react';
import ReactModal from 'react-modal';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {editModalOpen: false};
  }

  componentDidMount () {
    let username = this.props.match.params.username;
    this.props.fetchUserPhotos(username);
    this.props.fetchUser(username);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.url !== nextProps.match.url) {
      let username = nextProps.match.params.username;
      this.props.fetchUserPhotos(username);
      this.props.fetchUser(username);
    } else if (nextProps.errors.app.includes('User not found')) {
      this.props.history.push('/oops');
    }
    console.log(nextProps);
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

    const photos = this.props.photos.map((photo, idx) => {
      // let imgUrl = {backgroundImage: `url(${photo.preview_url})`};
      return (
        <div className='photo-preview-container' key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
    return (
      <div>
        <div style={coverUrl} className='cover-image'>
          <span className='profile-edit-btn'>Edit Profile</span>
        </div>
        <div className='user-profile-masthead'>
          <span style={profilePhotoUrl} className='profile-photo' />
          <h1 className='profile-header'>{this.props.user.username}</h1>
          <div className='user-profile-subheader-text'>
            <span>## Followers</span>
            <span>## Following</span>
          </div>
        </div>
        <div className='photos-grid'>
          { photos }
        </div>
        <ReactModal isOpen={this.props.showUploadModal} className='upload-modal'
          onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
          onAfterOpen={this.openModal.bind(this)}>
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
      profilePhotoUrl = {
        backgroundImage: `url(${this.props.user.profilePhotoUrl})`
      };
    }
    return [coverUrl, profilePhotoUrl];
  }
}

export default UserProfile;
