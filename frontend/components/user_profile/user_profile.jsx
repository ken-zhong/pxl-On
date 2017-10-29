import React from 'react';

class UserProfile extends React.Component {
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
    }
  }

  render () {
    let coverUrl, profilePhotoUrl;
    [coverUrl, profilePhotoUrl] = this.getUserUrls();

    const photos = this.props.photos.map((photo, idx) => {
      return (
        <div className='photo-preview-container' key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
    return (
      <div>
        <div style={coverUrl} className='cover-image'>
          <span>Profile pic and cover pic goes here</span>
        </div>
        <div className='user-profile-masthead'>
          <span style={profilePhotoUrl} className='profile-photo' />
          <h1 className='profile-header'>{this.props.user.username}</h1>
          <h1>This user is: {this.props.user.username}</h1>
        </div>
        <div className='photos-container'>
          { photos }
        </div>
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
