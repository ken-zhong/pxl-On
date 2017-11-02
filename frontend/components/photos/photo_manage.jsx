import React from 'react';

class PhotoManage extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({
      selectedPhoto: null,
      title: '',
      description: '',
      author_id: this.props.currentUser.id,
      loading: false
    });
    this.getPhotoElements = this.getPhotoElements.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount () {
    let username = this.props.currentUser.username;
    this.props.fetchUser(username);
    this.props.fetchUserPhotos(username);
  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDelete (id) {
    this.props.deletePhoto(id);
  }

  handleUpdate (formData) {
    this.props.updatePhoto(formData);
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
    let submitButton;
    if (this.state.loading) {
      submitButton = (
        <div className='submit-loading'>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
        </div>
      );
    } else {
      submitButton = (
        <button onClick={this.handleUpdate.bind(this)}
          className='submit-btn'>Update</button>
      );
    }
    // { this.getErrors() }

    const photos = this.getPhotoElements();
    return (
      <div className='photo-manage-page'>
        <div className='photo-manage-container'>
          { photos }
        </div>
        <div className='upload-details-form'>
          <h3>Edit your photos</h3>
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
            { submitButton }
            <br />
            <span onClick={this.handleDelete.bind(this)} className='photo-delete-btn'>Delete</span>
          </form>
        </div>
      </div>
    );
  }
}

export default PhotoManage;
