import React from 'react';
import ReactModal from 'react-modal';

class UploadComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: null,
      imageUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile (e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.imageFile);
    formData.append('photo[author_id]', this.props.currentUser.id);
    this.props.createPhoto(formData).then(res => {
      this.setState({imageUrl: null});
      this.closeModal();
      let newPath = `/${this.props.currentUser.username}`;
      if (newPath !== this.props.location.pathname) {
        this.props.history.push(newPath);
      }
    });
  }

  clearState () {
    this.setState({
      title: '',
      description: '',
      imageFile: null,
      imageUrl: null
    });
  }

  cancelPhotoUpload (e) {
    e.preventDefault();
    this.setState({imageUrl: null});
  }

  closeModal () {
    document.body.style.overflow = 'auto';
    this.clearState();
    this.props.toggleUploadModal();
  }

  openModal () {
    document.body.style.overflow = 'hidden';
  }

  render () {
    let uploadBtn;
    let imagePreviewContainer;
    if (!this.state.imageUrl) {
      uploadBtn = <label htmlFor='fileInput' className='upload-btn' >Select a photo</label>;
    } else {
      imagePreviewContainer = (
        <div className='upload-preview'>
          <i className='fa fa-window-close cancel-upload' onClick={this.cancelPhotoUpload.bind(this)} aria-hidden='true' />
          <img src={this.state.imageUrl} />
        </div>
      );
    }

    return (
      <ReactModal isOpen={this.props.showUploadModal} className='upload-modal'
        onRequestClose={this.closeModal.bind(this)} overlayClassName='overlay'
        onAfterOpen={this.openModal.bind(this)}>
          <div className='upload-preview-container'>
            { uploadBtn }
            <input className='hide-element' type='file'
              onChange={this.handleFile} id='fileInput' />
            { imagePreviewContainer }
          </div>
          <div className='upload-details-form'>
            <i onClick={this.closeModal.bind(this)} className='fa fa-times modal-close' aria-hidden='true' />
            <h3>Upload your photo!</h3>
            <form>
              <label><span className='upload-label'>Title</span>
                <br />
                <input value={this.state.title} type='text'
                  onChange={this.handleInput('title')} />
              </label>
              <br />
              <label><span className='upload-label'>Description</span>
                <br />
                <textarea onChange={this.handleInput('description')}
                  placeholder='Tell us more about your awesome photo!'
                  value={this.state.description} ></textarea>
              </label>
              <button onClick={this.handleSubmit} className='submit-btn'>Submit</button>
            </form>
          </div>
      </ReactModal>
    );
  }
}

export default UploadComponent;
