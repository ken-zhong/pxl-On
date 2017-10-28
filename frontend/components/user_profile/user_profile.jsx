import React from 'react'

class UserProfile extends React.Component {
  componentDidMount () {
    let username = this.props.match.params.username;
    this.props.fetchUserPhotos(username);
    this.props.fetchUser(username);
    this.coverStyle = {
      height: '60vh',
      backgroundColor: 'lightgrey'
    };
  }

  render () {
    console.log(this.props);
    const photos = this.props.photos.map((photo, idx) => {
      return (
        <div className='photo-preview-container' key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
    return (
      <div>
        <div style={this.coverStyle}>
          <span>Profile pic and cover pic goes here</span>
        </div>
        <div>
          <h1>User Component</h1>
          <h1>This user is: {this.props.user.username}</h1>
        </div>
        <div className='photos-container'>
          { photos }
        </div>
      </div>
    );
  }
}

export default UserProfile;
