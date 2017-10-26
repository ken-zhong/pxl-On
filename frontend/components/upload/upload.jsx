import React from 'react';

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
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit (e) {

  }

  render () {
    console.log(this.state);
    let uploadBtn = 'upload-btn';
    if (!this.state.imageUrl) {
      uploadBtn += ' upload-btn-on';
    }

    return (
      <div className='upload-modal'>

        <div className='upload-preview-container'>
          <label for='fileInput' className={uploadBtn} >Select a photo</label>
          <input className='hide-element' type='file'
            onChange={this.handleFile} id='fileInput' />
          <div className='upload-preview'>
            <img src={this.state.imageUrl} />
          </div>
        </div>

        <div className='upload-details-form'>
          <form>
            <label><span class='upload-label'>Title</span>
              <br />
              <input value={this.state.title} type='text'
                onChange={this.handleInput('title')} />
            </label>
            <br />
            <label><span class='upload-label'>Description</span>
              <br />
              <textarea onChange={this.handleInput('description')}
                placeholder='Tell us more about your awesome photo!'
                value={this.state.description} ></textarea>
            </label>
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadComponent;
