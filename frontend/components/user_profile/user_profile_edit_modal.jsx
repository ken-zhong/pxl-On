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
      profileUrl: this.props.oldProfilePhoto
    };
    this.handleFile = this.handleFile.bind(this);
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

  render () {
    let changeProfilePicBtn;
    if (this.state.loading) {
      changeProfilePicBtn = (
        <div className='submit-loading'>
          <i className='fa fa-spinner fa-spin fa-2x fa-fw' />
        </div>
      );
    } else {
      changeProfilePicBtn = (
        <label htmlFor='profileFileInput' className='text-small demo-login-btn'>
          Change your profile picture
        </label>
      );
    }

    const photos = this.props.photos.map((photo, idx) => {
      return (
        <div className='cover-photo-selector' key={idx}>
          <img src={photo.preview_url} />
        </div>
      );
    });

    return (
      <div className='profile-edit-component'>
        <h2>Select your cover photo</h2>
        <div className='cover-photo-grid'>
          {photos}
        </div>
        <div className='profile-photo-change-component'>
          <div className='profile-photo profile-photo-change'
            style={this.props.oldProfilePhoto} />
          { changeProfilePicBtn }
          <input className='hide-element' type='file'
            onChange={this.handleFile} id='profileFileInput' />
        </div>
      </div>
    );
  }
}

export default ProfileEditModal;
