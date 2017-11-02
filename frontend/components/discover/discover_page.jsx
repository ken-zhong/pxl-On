import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverPage extends React.Component {
  componentDidMount () {
    this.props.fetchUsers();
    this.props.fetchPhotos();
  }

  render () {
    let newPhotos, featuredPhotogs;

    newPhotos = this.props.photos.slice(0, 12).map((photo, idx) => (
      <Link to={`/photos/${photo.id}`} className='photo-preview-container' key={idx}>
        <img src={photo.preview_url} />
        <div className='photo-preview-overlay'>{photo.title} by {photo.author}</div>
      </Link>
    ));

    // featuredPhotogs = this.props.users.slice(0, 4).map((user, idx) => (
    //   <div key={idx}>{user.username}</div>
    // ));

    return (
      <div className='fadeIn'>

        <div className='discover-img-container'>
          <div className='splash-text'>
            <h1>
              DISCOVER INSPIRATION
            </h1>
          </div>
        </div>

        <div className='discover-page-content-container'>
          <h2>Featured Photographers</h2>
          { featuredPhotogs }
          <h2>New Photos</h2>
          <div className='masonry-grid'>
            { newPhotos }
          </div>
        </div>

      </div>
    );
  }
}

export default DiscoverPage;
