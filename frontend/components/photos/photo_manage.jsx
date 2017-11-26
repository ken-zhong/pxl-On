import React from 'react';

class PhotoManage extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({
      selectedPhoto: null,
      title: '',
      description: '',
      loading: false
    });
    this.getPhotoElements = this.getPhotoElements.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getErrors = this.getErrors.bind(this);
    this.clearLoading = this.clearLoading.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
    let username = this.props.currentUser.username;
    this.props.fetchUser(username);
    this.props.fetchUserPhotos(username);
  }

  clearLoading () {
    this.setState({loading: false});
  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDelete () {
    this.setState({
      loading: true,
      title: '',
      description: ''
    });
    this.props.deletePhoto(this.state.selectedPhoto).then(this.clearLoading,
      this.clearLoading);
  }

  handleUpdate () {
    this.setState({loading: true});
    let formData = {
      id: this.state.selectedPhoto,
      title: this.state.title,
      description: this.state.description,
      author_id: this.props.currentUser.id
    };
    this.props.updatePhoto(formData).then(this.clearLoading,
      this.clearLoading);
  }

  getErrors () {
    let errors;
    if (this.props.errors.app.length > 0) {
      errors = <span className='session-errors'>
        { this.props.errors.app.map((e, idx) => <div key={idx}>{e}</div>) }
      </span>;
    } else {
      errors = null;
    }
    return errors;
  }

  getPhotoElements () {
    return this.props.photos.map((photo, idx) => {
      let classList = 'cover-photo-selector';
      if (photo.id === this.state.selectedPhoto) {
        classList += ' cover-photo-selected';
      }
      return (
        <div onClick={() => this.selectPhoto(photo)} className={classList} key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
  }

  selectPhoto (photo) {
    this.setState({
      selectedPhoto: photo.id,
      title: photo.title,
      description: photo.description
    });
  }

  render () {
    const photos = this.getPhotoElements();
    let loadingOverlay;
    if (this.state.loading) {
      loadingOverlay = <div className='form-overlay' />;
    }
    return (
      <div className='photo-manage-page'>
        <div className='photo-manage-container'>
          { photos }
        </div>
        <div className='upload-details-form'>
          { loadingOverlay }
          <h3>Edit your photos</h3>
          { this.getErrors() }
          <form className='photo-edit-form'>
            <label><span className='upload-label'>Title</span>
              <br />
              <input value={this.state.title} type='text'
                onChange={this.handleInput('title')} />
            </label>
            <br />
            <label><span className='upload-label'>Description</span>
              <br />
              <textarea onChange={this.handleInput('description')}
                value={this.state.description} ></textarea>
            </label>
            <button onClick={this.handleUpdate.bind(this)}
              className='submit-btn'>Update</button>
            <span onClick={this.handleDelete.bind(this)} className='photo-delete-btn'>Delete</span>
          </form>
        </div>
      </div>
    );
  }
}

export default PhotoManage;
