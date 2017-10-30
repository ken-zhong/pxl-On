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
    this.setState({loading: true});
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, profileUrl: fileReader.result });
      const formData = new FormData();
      formData.append('photo[title]', 'profile_pic');
      formData.append('photo[image]', file);
      formData.append('photo[author_id]', this.props.currentUser.id);
      this.props.setProfilePhoto(formData).then(() => {
        this.setState({loading: false});
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  selectCover (id) {
    this.setState({selectedCover: id});
  }

  handleSubmit (e) {
    this.props.setCoverPhoto(this.state.selectedCover);
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
    let subtmitBtn;
    if (this.state.loading) {
      subtmitBtn = (
        <div className='submit-loading'>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
        </div>
      );
    } else {
      subtmitBtn = (
        <button className='submit-btn'>Save</button>
      );
    }

    const photos = this.getPhotoElements();

    return (
      <div className='profile-edit-component'>
        <h2>Select your cover photo</h2>
        <div className='cover-photo-grid'>
          {photos}
        </div>
        <div className='profile-photo-change-component'>
            <label htmlFor='profileFileInput' >
              <div className='profile-photo profile-photo-change'
                style={{backgroundImage: `url(${this.state.profileUrl})`}} />
              <span className='demo-login-btn'>Change your profile picture</span>
            </label>
          <input className='hide-element' type='file'
            onChange={this.handleFile} id='profileFileInput' />
        </div>
        <button className='submit-btn'>Save</button>
      </div>
    );
  }
}

export default ProfileEditModal;
