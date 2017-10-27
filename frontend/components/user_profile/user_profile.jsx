import React from 'react'

class UserProfile extends React.Component {

  componentDidMount () {
    let username = this.props.match.params.username;
    this.props.fetchUserPhotos(username);
  }

  render () {
    const photos = this.props.photos.map((photo, idx) => {
      return (
        <div className='photo-preview-container' key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
    return (
      <div>
        <h1>User Component</h1>
        <div className='photos-container'>
          { photos }
        </div>
      </div>
    );
  }
}

export default UserProfile;
