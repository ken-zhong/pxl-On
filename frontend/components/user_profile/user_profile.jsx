import React from 'react'

class UserProfile extends React.Component {

  componentDidMount () {
    let username = this.props.match.params.username;
    this.props.fetchUserPhotos(username);
  }

  render () {
    console.log(this.props);
    const photos = this.props.photos.map((photo, idx) => {
      console.log(photo);
      return (
        <div key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
    return (
      <div>
        <h1>User Component</h1>
        { photos }
      </div>
    )
  }
}

export default UserProfile;
