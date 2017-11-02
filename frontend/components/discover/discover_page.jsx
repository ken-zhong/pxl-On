import React from 'react';
import FeaturedPhotogItem from './featured_photog_item';
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

    // give it the photoBig tag so we show a big preview photon instead of multiple small ones
    featuredPhotogs = this.props.users.slice(0, 4).map((user, idx) => (
      <FeaturedPhotogItem user={user} key={idx} photoBig>{user.username}</FeaturedPhotogItem>
    ));

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
          <div className='featured-photogs-container-parent'>
            <div className='featured-photogs-container'>
              { featuredPhotogs }
            </div>
          </div>

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
