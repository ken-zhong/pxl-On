import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount () {
    let id = this.props.match.params.photoId;
    this.props.fetchPhoto(id).then((res) => {
      this.props.fetchUser(res.photo.author);
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      let id = this.props.match.params.photoId;
      this.props.fetchPhoto(id).then((res) => {
        this.props.fetchUser(res.photo.author);
      });
    }
  }

  closePhoto () {
    this.props.history.goBack();
  }

  render () {
    console.log(this.props);
    let user = this.props.user;
    let userProfileUrl;
    if (user.coverPhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${user.profilePhotoUrl})`};
    }
    return (
      <div className='photo-show-page'>
        <div className='photo-show-img'><img src={this.props.photo.large_url} /></div>
        <div className='photo-show-user-info-col'>
          <div className='follow-user-item-info'>
            <Link to={`/${user.username}`}>
              <div className='nav-user-icon' style={userProfileUrl} />
            </Link>
            <div>
              <Link to={`/${user.username}`} className='follow-user-link'>{user.username}</Link>
              <br />
              <span>{user.numFollowers} followers</span>
            </div>
          </div>
          { this.props.photo.title }
          { this.props.photo.description }
        </div>
      </div>
    );
  }
}

export default PhotoShow;
