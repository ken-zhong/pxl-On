import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';

class PhotoShow extends React.Component {
  componentDidMount () {
    let id = this.props.match.params.photoId;
    this.props.fetchPhoto(id).then((res) => {
      this.props.fetchUser(res.photo.author);
    }, () => {
      this.props.history.push('/oops');
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      let id = this.props.match.params.photoId;
      this.props.fetchPhoto(id).then((res) => {
        this.props.fetchUser(res.photo.author);
      }, () => this.props.history.push('/oops')
    );
    }
  }

  closePhoto () {
    this.props.history.goBack();
  }

  render () {
    let user = this.props.user;
    let userProfileUrl;
    if (user.coverPhotoUrl) {
      userProfileUrl = {backgroundImage: `url(${user.profilePhotoUrl})`};
    }
    // <span>{user.numFollowers} followers</span>
    return (
      <div className='photo-show-page fadeIn'>
        <div className='photo-show-img'><img src={this.props.photo.large_url} /></div>
        <div className='photo-show-user-info-col'>
          <div className='follow-user-item-info'>
            <Link to={`/${user.username}`}>
              <div className='nav-user-icon' style={userProfileUrl} />
            </Link>
            <div>
              <Link to={`/${user.username}`} className='follow-user-link'>{user.username}</Link>
              <br />
              <FollowButton user={this.props.user} />
            </div>
          </div>
          <div className='photo-show-description'>
            <h3>{ this.props.photo.title }</h3>
            <p>
              { this.props.photo.description }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
