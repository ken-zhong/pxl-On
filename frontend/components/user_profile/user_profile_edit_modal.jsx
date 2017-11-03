import React from 'react';
import ReactModal from 'react-modal';

class ProfileEditModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      imageFile: null,
      imageUrl: null,
      loading: false,
      profileUrl: this.props.oldProfileUrl,
      selectedCover: null
    };
    this.handleFile = this.handleFile.bind(this);
    this.getPhotoElements = this.getPhotoElements.bind(this);
  }

  handleFile (e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, profileUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  selectCover (id) {
    this.setState({selectedCover: id});
  }

  handleSubmit (e) {
    this.setState({loading: true});
    if (this.state.imageFile) {
      const formData = new FormData();
      formData.append('photo[title]', 'profile_pic_id#835612');
      formData.append('photo[image]', this.state.imageFile);
      formData.append('photo[author_id]', this.props.currentUser.id);
      this.props.setProfilePhoto(formData).then(() => {
        if (this.state.selectedCover) {
          this.props.setCoverPhoto(this.state.selectedCover).then(() => {
            window.location.reload();
          });
        } else {
          window.location.reload();
        }
      });
    } else if (this.state.selectedCover) {
      this.props.setCoverPhoto(this.state.selectedCover).then(() => {
        window.location.reload();
      });
    }
  }

  getPhotoElements () {
    return this.props.photos.map((photo, idx) => {
      let classList = 'cover-photo-selector';
      if (photo.isCoverPhoto && !this.state.selectedCover) {
        this.setState({selectedCover: photo.id});
      } else if (photo.id === this.state.selectedCover) {
        classList += ' cover-photo-selected';
      }
      return (
        <div onClick={() => this.selectCover(photo.id)} className={classList} key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });
  }

  render () {
    let submitBtn;
    if (this.state.loading) {
      submitBtn = (
        <div className='submit-loading'>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
        </div>
      );
    } else {
      submitBtn = (
        <button onClick={this.handleSubmit.bind(this)} className='submit-btn'>Save</button>
      );
    }
    let photos = this.getPhotoElements();
    if (photos.length === 0) {
      photos = <div className='flex-center container no-photos-warning'>No photos uploaded yet!</div>;
    }

    let profileUrl = this.state.profileUrl ? {backgroundImage: `url(${this.state.profileUrl})`} : {};
    return (
      <div className='profile-edit-component'>
        <h2>Select your cover photo</h2>
        <div className='cover-photo-grid'>
          {photos}
        </div>
        <div className='profile-photo-change-component'>
          <label htmlFor='profileFileInput' >
            <div className='profile-photo profile-photo-change'
              style={profileUrl} />
            <span className='demo-login-btn mobile-hide'>Change profile picture</span>
          </label>
          <input className='hide-element' type='file'
            onChange={this.handleFile} id='profileFileInput' />
        </div>
        { submitBtn }
      </div>
    );
  }
}

export default ProfileEditModal;
